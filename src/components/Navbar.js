
import { useState } from "react";
import Logo from "../assests/images/Logo.png"
import { Link, useLocation, useNavigate,useParams } from "react-router-dom"
import userimage from "../assests/images/user-3296 1.png"
import jwt from 'jwt-decode'


export default function Navbar({userName,user,setUser,setUserName}) {
   const navigate = useNavigate();
   const location = useLocation();
   const param = useParams();

   if(user){
    const token = localStorage.getItem("token");
     setUserName(jwt(token).sub); // decode your token here
}

  if(location.pathname=="/reg") return null;
  if(location.pathname=="/login") return null;
  if(location.pathname=="/admin") return null;
  if(location.pathname=="/admin2") return null;
  if(location.pathname=="/reg2") return null;
 
  

  
console.log("path",location.pathname)
if(location.pathname=="/JudgeProjectList"||location.pathname.startsWith('/judgeReview/')||location.pathname=="/panelistProjectList"||location.pathname.startsWith('/panelReview/')) return(
  <nav class="navbar navbar-expand-lg bg-body-tertiary"style={{boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.25)"}}>
  <div class="container-fluid">
    <a className="navbar-brand ms-5" href="#">
      <img src={Logo}  height="35" />
    </a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
       
  
      </ul>
     {!user&&<Link to="/reg2" className="me-5 p-2 col-1 btn text-white" style={{backgroundColor:"#ef4815", boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)"}}>Join us</Link>}
     {user&&<div class="dropdown-center me-4">
<div class=" me-5  dropdown-toggle d-flex" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <img src={userimage} height="30px"/>
  <div className="ms-2">{userName}</div>
</div>
<ul class="dropdown-menu dropdown-menu-right" style={{}}>
  
  <li><a onClick={()=>{setUser(false); localStorage.removeItem("token"); navigate("/")}} class="dropdown-item" href="#">Log Out</a></li>
  
</ul>
</div>}
    </div>
  </div>
</nav>
)

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary"style={{boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.25)"}}>
    <div class="container-fluid">
      <a className="navbar-brand ms-5" href="#">
        <img src={Logo}  height="35" />
      </a>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
          <li class="nav-item">
            <Link to='/' class="nav-link active" aria-current="page" href="#">Home</Link>
          </li>
          <li class="nav-item">
            <Link to='/guidelines' class="nav-link active" aria-current="page" href="#">FAQs</Link>
          </li>
          <li class="nav-item">
            <Link to="/results" class="nav-link active" aria-current="page" href="#">LeaderBoard</Link>
          </li>
          <li class="nav-item">
            <Link to="/contact" class="nav-link active" aria-current="page" href="#">Contact Us</Link>
          </li>
    
        </ul>
       {!user&&<Link to="/reg2" className="me-5 p-2 col-1 btn text-white" style={{backgroundColor:"#ef4815", boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)"}}>Join us</Link>}
       {user&&<div class="dropdown-center me-4">
  <div class=" me-5  dropdown-toggle d-flex" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <img src={userimage} height="30px"/>
    <div className="ms-2">{userName}</div>
  </div>
  <ul class="dropdown-menu dropdown-menu-right" style={{}}>
    <li><Link to="/projectDetail" class="dropdown-item" href="#">Dashboard</Link></li>
    <li><a onClick={()=>{setUser(false); localStorage.removeItem("token"); navigate("/")}} class="dropdown-item" href="#">Log Out</a></li>
    
  </ul>
</div>}
      </div>
    </div>
  </nav>
  );
};


