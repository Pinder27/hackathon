import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import axios from "axios";



function ResetPassword({setForgotPassword}) {
    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [otp,setOtp] = useState("");
    const [newPassword,setNewPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [flag,setFlag] = useState(true);
 function handleSend(){
    axios({
        method:"post",
        url:"http://localhost:8087/auth/forgotPassword",
        params:{
            username:username,
        }
    }).then((res)=>{
        console.log(res.data)
        setFlag(false);
       
    })
 }

 function handleUpdate(){
    axios({
        method:"post",
        url:"http://localhost:8087/auth/resetPassword",
        data:{
            username:username,
            otp:otp,
            newPassword:newPassword,
            newPassword2:confirmPassword
        }
    }).then((res)=>{
        console.log(res.data)
        alert("Password Updated")
        setForgotPassword(false);
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
     
        <button onClick={handleUpdate}>Update</button>
        
      </form>}
        </div>
     );
}

export default ResetPassword;