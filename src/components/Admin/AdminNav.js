import userimage from "../../assests/images/user-3296 1.png"
import { Link, useLocation, useNavigate,useParams } from "react-router-dom"
export default function AdminNav({user,setUser}){
    const username="pinder"
    const navigate = useNavigate();
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary"style={{boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.25)"}}>
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
     {user&&<div class="dropdown-center me-4">
<div class=" me-5  dropdown-toggle d-flex" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <img src={userimage} height="30px"/>
  <div className="ms-2">{username}</div>
</div>
<ul class="dropdown-menu dropdown-menu-right">
  
  <li><a onClick={()=>{setUser(false); localStorage.removeItem("token"); navigate("/")}} class="dropdown-item" href="#">Log Out</a></li>
  
</ul>
</div>}
    </div>
  </div>
</nav>
    )
}