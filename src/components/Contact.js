import Navbar from "./Navbar";
import landscapeImage from "../assests/images/landscapeImage.png"
import contactImg from "../assests/images/istockphoto-1053986724-612x612.jpg"
import contactImg2 from "../assests/images/2696b872b87bfe565a2ff12f3a1cb7c0.jpg"
import contactImg3 from "../assests/images/Contact-us-banner-1.png"
import Footer from "./Footer";
import bgImage from "../assests/images/pexels-alexander-kovalev-2847648.jpg";
import React, { useState, useEffect } from 'react';
import axios from "axios"


export default function Contact({alert}){
   const [subject,setSubject] = useState("")
   const [message,setMessage] = useState("")
   
   function handleSend(e){
    e.preventDefault();
    axios({
        method:"post",
        url:"https://lb0y9x24b9.execute-api.us-east-1.amazonaws.com/contactUs/Contact",
        data:{
                subject:subject,
                content:message
        },
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
          }
    }).then((res)=>{
        alert.setMessage(res.data);
        alert.setAlertStatus("success");
        alert.setShow(true);
        setMessage("")
        setSubject("")
 })
   }
    return (
        <>
       
        
        <div className="d-flex p-5" style={{background:"linear-gradient(315deg, rgb(13 100 189) 0%, rgb(28 233 220) 100%) 100%"}}>
             <div className="container-sm-6 flex-fill ms-5 p-5">
             <div className="h1" >Get in Touch</div>
                   <div className=" d-flex flex-column">

                    <div className="input-group mb-2 ">
                    <input value={subject} onChange={(e)=>setSubject(e.target.value)} className="form-control" placeholder="Subject"/>
                    </div>
                    <div className="input-group mb-2 ">
                    <textarea value={message} onChange={(e)=>setMessage(e.target.value)} className="form-control" placeholder="your Message" style={{height:"25vh"}}/>
                    </div>
                
                    <button onClick={handleSend} className="btn text-white" style={{backgroundColor:"#ef4815",}}>send mesage</button>
                   </div>
             </div>
             <div className="container-sm-6 flex-fill d-flex justify-content-center align-items-center mt-5">
                <img src={contactImg3} height="230"/>
             </div>
        </div>
        
        </>
    )
}