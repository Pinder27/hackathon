import React, { useEffect, useState } from 'react'
import axios from 'axios'
import JudgeprojectListRow from './judgeProjectListrow';


const JudgeProjectList = () => {
  const [allotedList,setAllotedList] = useState([ {
   teamName:"",
   implementation:{
    description: "",
gitHubURL: "",
implementationId: 2,
pptURL: "",
recordingURL: "",
score: []
   }
  }
]);

const [loader,setLoader] = useState(true)

  useEffect(()=>{
      axios({
        method:"get",
        url:"http://localhost:8087/api/implementations",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
        }
      }).then((res)=>{
              console.log(res.data);
              setAllotedList(res.data);
              setLoader(false);
      })
  },[])
   



  return (
    <div className='p-1' style={{background:"#e2eaf9"}}>
    

    <div className='w-75 mx-auto' style={{height:"100vh"}}>
      <h3 className='text-center mb-4 mt-4'>Project List</h3>
      <div className='p-3 row mb-3' style={{ backgroundColor: "#bdd4ea",boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)",borderStyle:"solid",borderWidth:"0.5px" }}>
            <span  style={{width:"13%"}} className='fw-bold col'>S. No.</span>
            <span style={{width:"30%"}} className='fw-bold col'>Team Name</span> 
            <span style={{width:"20%"}} className='fw-bold col'>Project Name</span>
            <span style={{width:"10%"}} className='fw-bold col'>Status</span>
           
      </div>
      {loader?(<div class="text-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>):(allotedList.length === 0?
        (
            <h4>You dont have any approvals request yet.</h4>
        ):
        (
            allotedList.map((row,index) =>(
                <div key={index}>
                   <JudgeprojectListRow
                        sNo={index}
                        teamName={row.teamName}
                        projectName={row.ideaTitle}
                        status={row.implementation.score.length===0?true:false}
                        id={row.implementation.implementationId}
                        />
              </div>
            ))
        ))}
     {
        
     }

      {/* <table className='table-row-gape w-75 mx-auto mt-5' 
      style={{backgroundColor:"rgb(227 227 202)", borderCollapse:"separate", borderSpacing:"0 20px"}}
      >
            <thead>
              <tr >
                <th scope="col">S. No.</th>
                <th scope="col">Team Name</th>
                <th scope="col">Project Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
                {
                    allotedList.map((row, index) =>(
                        <ProjectList 
                        sNo={index}
                        teamName={row.teamName}
                        projectName={row.projectName}
                        status={row.status}
                        review={row.review}
                        />
                    ))
                }
            </tbody>
          </table>
       */}
    </div>
    </div>
  )
}

export default JudgeProjectList
