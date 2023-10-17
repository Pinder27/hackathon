import React, { useEffect } from 'react'
import '../assests/css/CompletedHackathon.css'
import { Link } from 'react-router-dom';
import jwt from 'jwt-decode'
import axios from 'axios';



const UserDashboard = ({user}) => {
  var username = "";
  if(user){
    const token = localStorage.getItem("token");
     username = jwt(token).sub; // decode your token here
     console.log(username.sub)
}
  const YourHackathons =[
    {
      teamName:'Data Dynamos',
      ideaTitle:'Eco-Friendly Transport Planner',
      ideaURL:"/1"
    },
    {
      teamName:'Byte Benders',
      ideaTitle:'Health and Wellness Assistant',
      ideaURL:"/2"
    },
    {
      teamName:'Hack Mavericks',
      ideaTitle:'Smart Home Energy Management',
      ideaURL:"/3"
    },
    {
      teamName:'Pixel Pioneers',
      ideaTitle:'Education for All',
      ideaURL:"/4"
    },
    {
      teamName:'Data Dynamos',
      ideaTitle:'Food Waste Reduction App',
      ideaURL:"/5"
    }
  
  ];
  

  // useEffect(()=>{
  //        axios({
  //         method:"get",
  //         url:"http://localhost:8087/user/implementations"
  //        }).then((res)=>{
  //         YourHackathons = res
  //        })
  // },[])

  return (
    <>
    
    <div className='mx-5 mb-5'>
      {/* name of user will be displayed here */}
      <h2 className='mt-5 mb-5 ms-5'>{username}</h2>  

      <h4 className='ms-5 mb-3'>Your Hackathons</h4>
      {
       YourHackathons.length == 0 ?
       (
          <h4>You did not participated in any hackathon yet.</h4>
       ):(
        YourHackathons.map((detail, index) => (
          <div key={index} className='row-with-shadow-flex mx-5 mb-4'>
            <span style={{fontWeight:"500"}}>{detail.teamName}</span>
            <span style={{fontWeight:"500"}}>{detail.ideaTitle}</span> 
            <button>
              <span>
                <Link to={"/projectDetail"+detail.ideaURL} className='click-to-view-btn'>Click to View</Link>
              </span>
            </button>
          </div>
        ))
        )
       
      }
    </div>
   
    </>
  )
}

export default UserDashboard
