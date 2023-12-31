import "../assests/css/rej2.css"
import React, { useEffect, useState,useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Verification from "./verification";
import ResetPassword from "./resetPassword";
export default function Reg2({user,setUser,alert}){
    
    const [isSignupActive, setIsSignupActive] = useState(false);
    const [verify,setVerify] = useState(false);
    const [forgotPassword,setForgotPassword] = useState(false);

  const handleSignupClick = () => {
    setIsSignupActive(true);
  }

  const handleSigninClick = () => {
    setIsSignupActive(false);
  }

  const [flag,setFlag] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const navigate = useNavigate("");
  const buttonRef = useRef();

  const handleSubmitLogin = async (e) => {
     e.preventDefault();
     var user = {
         username:username,
         password:password
     }
     console.log(user)
     axios({
         method:"post",
         url:"https://lb0y9x24b9.execute-api.us-east-1.amazonaws.com/auth/login",
         data:user
     }).then((res)=>{
         console.log(res.data.role[res.data.role.length-1].name);
         localStorage.setItem("token",res.data.token);
         setUser(true);
         alert.setMessage("Login successful")
         alert.setAlertStatus("success")
         alert.setShow(true);
        
         if(res.data.role[res.data.role.length-1].name==="Role_Panelist"){
             
             navigate("/panelistProjectList")
         }
         else if(res.data.role[res.data.role.length-1].name==="Role_Judge"){
             navigate("/JudgeProjectList")
         }
         else if(res.data.role[res.data.role.length-1].name==="Role_Admin"){
             navigate("/admin2")
         }
         else navigate("/");
     }).catch((e)=>{
      console.log(e)
      alert.setMessage("invalid Credentials")
      alert.setAlertStatus("error")
      alert.setShow(true);
     })
     
   
 };

 const handleSubmitSignup = async (e) => {
     e.preventDefault();
     if(password!==cpassword){
           alert.setMessage("Passwords do not match")
           alert.setAlertStatus("error")
           alert.setShow(true);
           return;
     }
     var user = {
         username:username,
         firstName:firstName,
         lastName:lastName,
         email:email,
         password:password
     }
     axios({
         method:"post",
         url:"https://lb0y9x24b9.execute-api.us-east-1.amazonaws.com/registration/register",
         data:user
     }).then((res)=>{
         console.log("sign in",res)
        // localStorage.setItem("token",res.token);
       // setUser(true);
        // navigate("/");
        setVerify(true);
        
     }).catch((e)=>{
      console.log(e)
      alert.setMessage(e.response.data)
      alert.setAlertStatus("error")
      alert.setShow(true);
     })

 };
    return(
       
            <div className="body12 ">
  <div className={`container12 ${isSignupActive ? 'right-panel-active' : ''}`} id="container12">
    <div className="form-container sign-up-container">
      {(verify)?(<Verification username={username} setVerify={setVerify} email_={email} buttonRef={buttonRef} alert={alert}/>):(<form action="#">
        <h1>Create Account</h1>
        
        <span>or use your email for registration</span>
        <div class="row g-3">
  <div class="col">
    <input type="text"  onChange={(e)=>setFirstName(e.target.value)} required  placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" onChange={(e)=>setLastName(e.target.value)} required  placeholder="Last name" aria-label="Last name"/>
  </div>
</div>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
        <input type="email" onChange={(e)=>setUsername(e.target.value)} placeholder="Username" />
        <div class="row g-3">
  <div class="col">
    <input type="password" onChange={(e)=>setPassword(e.target.value)}  placeholder="Password" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="password" onChange={(e)=>setcPassword(e.target.value)} placeholder="Confirm Passsword" aria-label="Last name"/>
  </div>
</div>
        <button onClick={handleSubmitSignup}>Sign Up</button>
      </form>)}
    </div>
   { <div className="form-container sign-in-container">
     { forgotPassword?(<ResetPassword email={email} alert={alert} setForgotPassword={setForgotPassword}/>):(<form action="#">
        <h1 >Sign in</h1>
      
        <span>or use your account</span>
        <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Username" />
        <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
        <a href="#" onClick={(e)=>setForgotPassword(true)}>Forgot your password?</a>
        <button onClick={handleSubmitLogin}>Sign In</button>
      </form>)}
    </div>}
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <button ref={buttonRef} onClick={handleSigninClick} className="ghost" id="signIn">
            Sign In
          </button>
        </div>
        <div className="overlay-panel overlay-right">
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start journey with us</p>
          <button onClick={handleSignupClick} className="ghost" id="signUp">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

       
    )
}