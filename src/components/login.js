import { useRef, useState } from "react"
import "../assests/css/login.css"
import axios from "axios";
import { useNavigate } from "react-router";
export default function Login({user,setUser}){

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
            url:"https://3alj5tgxd8.execute-api.us-east-1.amazonaws.com/dev/auth/login",
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
            url:"https://3alj5tgxd8.execute-api.us-east-1.amazonaws.com/dev/registration",
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
        <div className="body-store">
            <div className="d-flex justify-content-center mt-5" >
            {flag&&<form className="m-5 col-3 p-5" style={{boxShadow: "0px 0px 8px 1px rgba(0, 0, 0, 0.2)",backgroundColor:"#ffffff9c",borderRadius:"3px"}}>
  <h2>Login</h2>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username</label>
    <input type="email" onChange={(e)=>setUsername(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" onChange={(e)=>setPassword(e.target.value)} class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" onClick={handleSubmitLogin} class="btn btn-primary">Login</button>
  <div className="d-flex flex-column">
  <div className="me-auto mt-3 p-0 btn">Forgot Password</div>
  
  <button class="ms-auto btn mt-3 btn-outline-dark" onClick={(e)=>setFlag(false)}>Sign Up</button>
  </div>
</form>}


            {!flag&&<form className="col-4 p-5" style={{boxShadow: "0px 0px 8px 1px rgba(0, 0, 0, 0.2)",backgroundColor:"#ffffff9c",borderRadius:"3px"}}>
                <h2>Sign up</h2>
 <div className="row">
  <div class="mb-3 col">
    <label for="exampleInputfname"  class="form-label">First Name</label>
    <input type="text" onChange={(e)=>setFirstName(e.target.value)} class="form-control" id="exampleInputfname" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3 col">
    <label for="exampleInputlname" class="form-label">Last Name</label>
    <input type="text" class="form-control" onChange={(e)=>setLastName(e.target.value)} id="exampleInputlname" aria-describedby="emailHelp"/>
   
  </div>
  </div>
  <div class="mb-3">
    <label for="exampleInputusername" class="form-label">Username</label>
    <input type="text" class="form-control" onChange={(e)=>setUsername(e.target.value)} id="exampleInputusername" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail" class="form-label">Email</label>
    <input type="email" onChange={(e)=>{setEmail(e.target.value)}} class="form-control" id="exampleInputEmail"/>
  </div>
  <div className="row">
  <div class="mb-3 col">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" onChange={(e)=>setPassword(e.target.value)} class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 col">
    <label for="exampleInputPassword2" class="form-label">Confirm Password</label>
    <input type="password" onChange={(e)=>{setcPassword(e.target.value)}} class="form-control" id="exampleInputPassword2"/>
  </div>
  </div>
 
  <button type="submit" onClick={handleSubmitSignup} class="btn btn-primary">Sign up</button>
  <div className="d-flex flex-end">
  <button className="btn ms-auto btn-outline-dark" ref={buttonRef} onClick={(e)=>setFlag(true)}>Login</button>
  </div>
</form>}

            </div>
        <div>
           <div class="wave"></div>
           <div class="wave"></div>
           <div class="wave"></div>
        </div>
      </div>
    )
}