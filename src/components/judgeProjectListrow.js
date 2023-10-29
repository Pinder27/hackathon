import React from 'react'
import { Link } from 'react-router-dom'
const JudgeprojectListRow = ({sNo, teamName, projectName, status, id}) => {
  return (
    <div className='p-3 row fw-semibold mb-3 ' style={{backgroundColor:"#f4f4f4",boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)"}}> 
      
            <span className='col' >{sNo+1}</span>
            <span className='col' >{teamName}</span> 
            <span className='col'  >{projectName}</span>
           
            <span className='col'>
        
           {status? (<Link className='btn btn-sm text-white' style={{ backgroundColor:"#043465"}} to={`/judgeReview/`+`${id}`}>Review</Link>):"Evaluated"}
        
        </span>
    </div>
  )
}

export default JudgeprojectListRow
