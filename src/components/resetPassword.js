import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import axios from "axios";



function ResetPassword({email,setForgotPassword,alert}) {
    const [username,setUsername] = useState("");
    const [otp,setOtp] = useState("");
    const [newPassword,setNewPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [flag,setFlag] = useState(true);
    const [reotp,setReotp] = useState(true);
  
    const [seconds, setSeconds] = useState(120); // Initial time in seconds
    const [isActive, setIsActive] = useState(true);

    function handleRegenrateOtp(e){
        e.preventDefault();
        console.log("email",email)
        axios({
            method:"put",
            url:"https://fre03ohz02.execute-api.ap-south-1.amazonaws.com/registration/regenerate-otp",
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

      const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      };
    
 function handleSend(e){
    e.preventDefault()
    axios({
        method:"post",
        url:"https://fre03ohz02.execute-api.ap-south-1.amazonaws.com/auth/forgotPassword",
        params:{
            username:username,
        }
    }).then((res)=>{
        console.log(res.data)
        setFlag(false);
       
    }).catch((e)=>{
        console.log(e)
        alert.setMessage(e.response.data)
        alert.setAlertStatus("error")
        alert.setShow(true);
       })
 }

 function handleUpdate(e){
    e.preventDefault();
    axios({
        method:"post",
        url:"https://fre03ohz02.execute-api.ap-south-1.amazonaws.com/auth/resetPassword",
        data:{
            username:username,
            otp:otp,
            newPassword:newPassword,
            newPassword2:confirmPassword
        }
    }).then((res)=>{
        console.log("res",res.data)
        
        if(res.data==="Invalid OTP."){
            alert.setMessage("Invalid OTP")
            alert.setAlertStatus("error")
            alert.setShow(true);
        }
        else{
            setForgotPassword(false);
        }
        
    }).catch((e)=>{
        console.log(e)
        alert.setMessage(e.response.data)
        alert.setAlertStatus("error")
        alert.setShow(true);
       })
 }
 
    return ( 
        <div>
             {flag&&<form className='mt-5' action="#">
        <h1 className='mt-5'>Forgot Password</h1>
        
        <span>please enter your username</span>
    
        <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Username" />
     
        <button onClick={handleSend}>send</button>
        
      </form>}
      {!flag&&<form  action="#">
        <h1 className='mt-5'>Reset Password</h1>
        
        <span>please enter your otp</span>
    
        
        <input type="text"  onChange={(e)=>setOtp(e.target.value)} placeholder="Otp" />
        <input type="password"  onChange={(e)=>setNewPassword(e.target.value)} placeholder="New Password" />
        <input type="password"  onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
     
       {isActive&&<button onClick={handleUpdate}>
            <span className='me-1'>Update</span>
        <span>{formatTime(seconds)}</span>
        </button>}
        <a onClick={handleRegenrateOtp}>Regenerate otp</a>
        
      </form>}
        </div>
     );
}

export default ResetPassword;