
import React, { useState, useEffect } from 'react';
import axios from "axios";

function Verification({email_,buttonRef,alert,setVerify}) {
    const [email,setEmail] = useState(email_);
    const [otp,setOtp] = useState("");
    const [reotp,setReotp] = useState(true);
  
    const [seconds, setSeconds] = useState(120); // Initial time in seconds
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
            url:"http://localhost:8087/registration/verifyEmail",
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

    function handleRegenrateOtp(){
        console.log("email",email)
        axios({
            method:"put",
            url:"http://localhost:8087/registration/regenerate-otp",
            params:{
                email:email
            }
        }).then((res)=>{
            console.log(res.data)
            setReotp(true)
            setSeconds(120); // Reset the timer to 2 minutes
            setIsActive(true)
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
        <a onClick={handleRegenrateOtp}>Regenerate otp</a>
        {reotp&&<span className='text-success pb-5'>Otp sent please check</span>}
      </form>
        </div>
     );
}

export default Verification;