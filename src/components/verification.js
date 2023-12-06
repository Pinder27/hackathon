
import React, { useState, useEffect } from 'react';
import axios from "axios";

function Verification({username,email_,buttonRef,alert,setVerify}) {
    const [email,setEmail] = useState(email_);
    const [otp,setOtp] = useState("");
    const [reotp,setReotp] = useState(true);
  
    const [seconds, setSeconds] = useState(300); // Initial time in seconds
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        let countdown;
        
        if (isActive && seconds > 0) {
          countdown = setInterval(() => {
            setSeconds(seconds - 1);
          }, 1000);
        } else if (seconds === 0) {
            setIsActive(false)
          clearInterval(countdown);
          // You can perform any action when the countdown finishes here
        }
    
        return () => clearInterval(countdown); // Cleanup interval on unmount or state change
      }, [isActive, seconds]);

    const toggleTimer = () => {
        setIsActive(!isActive);
      };
    
      const resetTimer = () => {
        setIsActive(false);
        setSeconds(120); // Reset the timer to 2 minutes
      };
    
      const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      };
    
    function handleVerify(e){
        e.preventDefault();
        axios({
            method:"put",
            url:"https://lb0y9x24b9.execute-api.us-east-1.amazonaws.com/registration/verifyEmail",
            params:{
                email:email,
                otp:otp
            }
        }).then((res)=>{
            console.log(res.data)
            alert.setMessage("Registration Successfull, You can Login now!");
            alert.setAlertStatus("success")
            alert.setShow(true);
            buttonRef.current.click();
            setVerify(false)
        }).catch((e)=>{
            console.log(e)
            alert.setMessage(e.response.data)
            alert.setAlertStatus("error")
            alert.setShow(true);
           })
    }

    function handleRegenrateOtp(e){
      e.preventDefault();
        console.log("email",username)
        axios({
            method:"put",
            url:"https://lb0y9x24b9.execute-api.us-east-1.amazonaws.com/registration/regenerate-otp",
            params:{
                username:username
            }
        }).then((res)=>{
            console.log(res.data)
            setReotp(true)
            setSeconds(300); // Reset the timer to 2 minutes
            setIsActive(true)
            alert.setMessage("Otp Sent")
            alert.setAlertStatus("success")
            alert.setShow(true);
        }).catch((e)=>{
            console.log(e)
            alert.setMessage(e.response.data)
            alert.setAlertStatus("error")
            alert.setShow(true);
           })
    }
    return ( 
        <div className='mt-5'>
               <form action="#">
        <h1 className='mt-5'>Verification</h1>
        
        <span>please verify your email</span>
    
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
        <input type="text" onChange={(e)=>setOtp(e.target.value)} placeholder="OTP" />
     
        {isActive&&<button className='col-7' onClick={handleVerify}>
        <span className='me-2'>verify</span>
        <span>{formatTime(seconds)}</span>
        </button>}
        <button className='btn text-black' onClick={handleRegenrateOtp} style={{background:"#fff",border:0, textTransform: "none",fontWeight:"normal"}}>Regenerate otp</button>
        {reotp&&<span className='text-success pb-5'>Otp sent please check</span>}
      </form>
        </div>
     );
}

export default Verification;