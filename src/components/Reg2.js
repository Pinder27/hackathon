import "../assests/css/rej2.css"
import React, { useEffect, useState,useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
export default function Reg2({user,setUser}){
    
    const [isSignupActive, setIsSignupActive] = useState(false);

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
         url:"http://localhost:8087/auth/login",
         data:user
     }).then((res)=>{
         console.log(res.data.role[res.data.role.length-1].name);
         localStorage.setItem("token",res.data.token);
         setUser(true);
         if(res.data.role[res.data.role.length-1].name==="Role_Panelist"){
             navigate("/panelistProjectList")
         }
         else if(res.data.role[res.data.role.length-1].name==="Role_Judge"){
             navigate("/JudgeProjectList")
         }
         else if(res.data.role[res.data.role.length-1].name==="Role_Admin"){
             navigate("/admin")
         }
         else navigate("/");
     }).catch((e)=>{
       console.log(e);
     })
     
   
 };

 const handleSubmitSignup = async (e) => {
     e.preventDefault();
     if(password!==cpassword){

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
         url:"http://localhost:8087/registration",
         data:user
     }).then((res)=>{
         console.log(res)
        // localStorage.setItem("token",res.token);
       // setUser(true);
        // navigate("/");
        alert("sign up successful ,you can login now")
        buttonRef.current.click();
     },function(error){
         console.log("error from sign up", error)
     })

 };
    return(
       
            <div className="body12 ">
  <div className={`container12 ${isSignupActive ? 'right-panel-active' : ''}`} id="container12">
    <div className="form-container sign-up-container">
      <form action="#">
        <h1>Create Account</h1>
        
        <span>or use your email for registration</span>
        <div class="row g-3">
  <div class="col">
    <input type="text" onChange={(e)=>setFirstName(e.target.value)}  placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" onChange={(e)=>setLastName(e.target.value)}  placeholder="Last name" aria-label="Last name"/>
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
      </form>
    </div>
    <div className="form-container sign-in-container">
      <form action="#">
        <h1 >Sign in</h1>
      
        <span>or use your account</span>
        <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Username" />
        <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
        <a href="#">Forgot your password?</a>
        <button onClick={handleSubmitLogin}>Sign In</button>
      </form>
    </div>
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