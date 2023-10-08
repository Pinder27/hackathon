import React from "react";
import "../assests/css/Reg.css";
import { useState, useContext } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "../../utils/generalstyles/generalstyles.css";
import { useNavigate } from "react-router";
// import CircularProgress from "@mui/material/CircularProgress";

// import GoogleIcon from '@mui/icons-material/Google';

const Reg = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setcPassword] = useState("");
    const navigate = useNavigate("");
    const [loading, setLoading] = useState(false);

    // const { account, setAccount } = useContext(LoginContext);

    //to authenticate login
    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        // setLoading(true);
        // if (email === "") {
        //     toast.warning("please enter Email", {
        //         position: "top-center",
        //     });
        // } else if (password === "") {
        //     toast.warning("please enter password", {
        //         position: "top-center",
        //     });
        // }

        // const res = await fetch("/login", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         email,
        //         password,
        //     }),
        // });

        // const data = await res.json();
        // console.log(data);

        // if (res.status === 400 || !data) {
        //     toast.warning("Invalid details", {
        //         position: "top-center",
        //     });
        // } else {
        //     // console.log("login data valid");
            
        //     setName("");
        //     setEmail("");
        //     setAccount(data);
        //     setTimeout(() => {
        //      toast.success("Logged In succefully", {
        //        position: "top-center",
        //       });
        //       }, 2000); 
            
        //     navigate("/");
        // }
        // setLoading(false);
    };

    const handleSubmitSignup = async (e) => {
        e.preventDefault();
        // setLoading(true);
        // if (name === "") {
        //     toast.warning("please enter name", {
        //         position: "top-center",
        //     });
        // } else if (email === "") {
        //     toast.warning("Please Enter Email", {
        //         position: "top-center",
        //     });
        // } else if (password.length < 6 || cpassword.length < 6) {
        //     toast.warning("Password must contain atleast 6 characters", {
        //         position: "top-center",
        //     });
        // } else if (password !== cpassword) {
        //     toast.warning("Both passwords not matched", {
        //         position: "top-center",
        //     });
        // }

        // const res = await fetch("/register", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         name,
        //         email,
        //         password,
        //         cpassword,
        //     }),
        // });
        // const data = await res.json();
        // // console.log(data);

        // if (res.status === 422 || !data) {
        //     // alert("no data");
        //     toast.warning("Data not added", {
        //         position: "top-center",
        //     });
        // } else {
        //     // alert("data successfully added");
        //     toast.success("Registered succefully", {
        //         position: "top-center",
        //     });
        //     setName("");
        //     setEmail("");
        //     setPassword("");
        //     setcPassword("");
        // }
        // setLoading(false);
    };

    return (
        <>
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
                        {/* <ToastContainer style={{ zIndex: "1000" }} /> */}
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