import React from "react";
import "../assests/css/Reg.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import Navbar from './Navbar';


const Reg = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setcPassword] = useState("");
    const navigate = useNavigate("");
    const [loading, setLoading] = useState(false);

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        
      
    };

    const handleSubmitSignup = async (e) => {
        e.preventDefault();
       
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
                            <label for="chk" aria-hidden="true">
                                Sign up
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                onChange={(e) => {
                                    setName(e.target.value);
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
                            <button
                                className="shop-button"
                                onClick={handleSubmitLogin}
                            >
                                Login
                            </button>
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