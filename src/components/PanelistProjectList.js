import React from 'react'
import ProjectList from './components/projectListRow'

const PanelistProjectList = () => {
  const allotedList=[
    {
        teamName:"abc",
        projectName:"project Name 1",
        status:"Approved",
        review:"/panelReview/12"
    },
    {
        teamName:"abc",
        projectName:"project Name 2",
        status:"Pending",
        review:"/panelReview/122"
    },
    {
        teamName:"abc",
        projectName:"project Name 3",
        status:"Rejected",
        review:"/panelReview/132"
    },
    {
        teamName:"abc",
        projectName:"project Name 4",
        status:"Approved",
        review:"/panelReview/212"
    },
    {
        teamName:"abc",
        projectName:"project Name 5",
        status:"Pending",
        review:"/panelReview/1d2"
    }

  ]  

  return (
    <div className='w-75 mx-auto'>
      <h3 className='text-center mb-4'>Project List</h3>
      <div className='row-with-shadow-flex' style={{ backgroundColor: "#bdd4ea" }}>
            <span style={{width:"15%"}} className='fw-bold'>S. No.</span>
            <span style={{width:"25%"}} className='fw-bold'>Team Name</span> 
            <span style={{width:"35%"}} className='fw-bold'>Project Name</span>
            <span style={{width:"30%"}} className='fw-bold'>Status</span> 
      </div>
     {
        allotedList.length === 0?
        (
            <h4>You dont have any approvals request yet.</h4>
        ):
        (
            allotedList.map((row,index) =>(
                <div key={index}>
                   <ProjectList 
                        sNo={index}
                        teamName={row.teamName}
                        projectName={row.projectName}
                        status={row.status}
                        review={row.review}
                        />
              </div>
            ))
        )
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
  )
}

export default PanelistProjectList
