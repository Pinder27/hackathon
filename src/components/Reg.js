import React from "react";
import "../assests/css/Reg.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import Navbar from './Navbar';
import axios from "axios";
import { Link } from "react-router-dom";


const Reg = ({user,setUser}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setcPassword] = useState("");
    const navigate = useNavigate("");
    const [loading, setLoading] = useState(false);
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
            console.log(res.data.token);
            localStorage.setItem("token",res.data.token);
            setUser(true);
            if(username==="anuj27"){
                navigate("/panelistProjectList")
            }
            else if(username==="dhruv27"){
                navigate("/judgeReview")
            }
            else navigate("/");
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
           buttonRef.current.click();
        },function(error){
            console.log("error from sign up", error)
        })
    };

    return (
        <>
          <Navbar />
        {
            // loading ? (
            // <div className="circle">
            //         <CircularProgress />
            //         <h2>Processing...</h2>
            //     </div> ):
            //  (
                
    
            <div className="auth-container">
                <div className="main">
                    <input type="checkbox" id="chk" aria-hidden="true" />

                    <div className="signup">
                        <form method="POST">
                            <label ref={buttonRef} for="chk" aria-hidden="true">
                                Sign up
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="First Name"
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                }}
                            />
                            <input
                                type="text"
                                name="name"
                                placeholder="Last Name"
                                onChange={(e) => {
                                    setLastName(e.target.value);
                                }}
                            />
                             <input
                                type="text"
                                name="name"
                                placeholder="username"
                                onChange={(e)=>{
                                    setUsername(e.target.value)
                                }}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                            <input
                                type="password"
                                name="cpassword"
                                placeholder="Confirm password"
                                onChange={(e) => {
                                    setcPassword(e.target.value);
                                }}
                            />
                            <button onClick={handleSubmitSignup}>
                                Sign up
                            </button>
                        </form>
                       
                    </div>

                    <div className="login">
                        <form>
                            <label for="chk" aria-hidden="true">
                                Login
                            </label>
                            <input
                                type="text"
                                name="email"
                                placeholder="username"
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                    console.log(username)
                                }}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                            <button
                                className="shop-button"
                                onClick={handleSubmitLogin}
                            >
                                Login
                            </button>
                           <Link className="text-center"><div>Forgot Password</div></Link>
                        </form>
                    </div>
                </div>
            </div>
            //  )
             }
        </>
    );
};

export default Reg;