import React from 'react'
import { Link } from 'react-router-dom'
const projectList = ({sNo, teamName, projectName, status, id}) => {
  return (
    <div className='p-3 d-flex justify-content-between fw-semibold mb-3 ' style={{backgroundColor:"#f4f4f4",boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)"}}> 
      
            <span style={{width:"15%"}}>{sNo+1}</span>
            <span style={{width:"25%"}}>{teamName}</span> 
            <span style={{width:"35%"}}>{projectName}</span>
            <span style={{width:"20%"}}> {status}</span> 
            <span style={{width:"10%"}}>
        
           {status=="Pending"&&<Link className='btn text-white' style={{ backgroundColor:"#043465"}} to={`/panelReview/`+`${id}`}>Review</Link>}
        
        </span>
    </div>
  )
}

export default projectList
