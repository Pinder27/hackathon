import React from 'react'
import { Link } from 'react-router-dom'
const projectList = ({sNo, teamName, projectName, status, review}) => {
  return (
    <div className='row-with-shadow-flex fw-semibold'> 
      
            <span style={{width:"15%"}}>{sNo+1}</span>
            <span style={{width:"25%"}}>{teamName}</span> 
            <span style={{width:"35%"}}>{projectName}</span>
            <span style={{width:"20%"}}> {status}</span> 
            <span style={{width:"10%"}}>
        {
          status === "Pending" &&
            <Link className='btn btn-sm' style={{color:"white", fontSize:"10px", backgroundColor:"#043465"}} to={review}>Review</Link>
        }
        </span>
    </div>
  )
}

export default projectList
