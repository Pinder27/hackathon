import Linkedin from "../assests/images/LinkedIn.png";
import Instagram from "../assests/images/Instagram.png";
import Twitter from "../assests/images/Twitter.png";
import Facebook from "../assests/images/Facebook.png";
import { useLocation } from "react-router";

export default function Footer(){
    const location = useLocation();
  if(location.pathname=="/reg") return null;
  if(location.pathname=="/login") return null;
  if(location.pathname=="/admin") return null;
  if(location.pathname=="/reg2") return null;
    return(
        <div>
             <div className="container-fluid p-5 " style={{backgroundColor:"#1E0156",boxShadow:"0px 0px 2px 1px rgba(0, 0, 0, 0.25)"}}>
                <div className="text-white text-center h5 mb-5 mt-5" >Stay Up To Date with our News and Notifications</div>
                <div className="d-flex justify-content-center mb-5">
                     <div className="me-2">
                      <img src={Instagram} height="40px"/>
                     </div>
                     <div className="me-2">
                      <img src={Facebook} height="40px"/>
                     </div>
                     <div className="me-2">
                      <img src={Twitter} height="40px"/>
                     </div>
                     <div className="me-2">
                      <img src={Linkedin} height="40px"/>
                     </div>
                </div>
                <div className="text-white text-center mb-5">Copyright © Hackathon 4.0 | All rights reserved</div>
      </div>
        </div>
    )
}