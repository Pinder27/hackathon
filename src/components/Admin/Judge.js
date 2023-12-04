import React,{useState} from 'react'
import DropDown from "../../assests/images/drop-down-4.png"
import Bell from "../../assests/images/bell-3.png"
import axios from "axios"

function Judge({setJudgeList,judgeList,alert}) {
    const [ideasAssigned,setIdeasAssigned] = useState();
    const [ideasEvaluated,setIdeasEvaluated] = useState();
    const [filteredList,setFilteredList] = useState(judgeList);
      const [ideaList,setIdeaList] = useState([{
        teamName: "string",
        presentationAndCommunicationScore: 0,
        technicalProficiencyScore: 0,
        creativityAndInnovationScore: 0
      },{
        teamName: "string",
        presentationAndCommunicationScore: 0,
        technicalProficiencyScore: 0,
        creativityAndInnovationScore: 0
      },{
        teamName: "string",
        presentationAndCommunicationScore: 0,
        technicalProficiencyScore: 0,
        creativityAndInnovationScore: 0
      },{
        teamName: "string",
        presentationAndCommunicationScore: 0,
        technicalProficiencyScore: 0,
        creativityAndInnovationScore: 0
      },{
        teamName: "string",
        presentationAndCommunicationScore: 0,
        technicalProficiencyScore: 0,
        creativityAndInnovationScore: 0
      },{
        teamName: "string",
        presentationAndCommunicationScore: 0,
        technicalProficiencyScore: 0,
        creativityAndInnovationScore: 0
      }])

      function handleSendReminderJudges(e){
        e.preventDefault();
        axios({
           method:"get",
           url:"https://lb0y9x24b9.execute-api.us-east-1.amazonaws.com/admin/sendReminderToJudges",
           headers: {
               'Authorization': `Bearer ${localStorage.getItem("token")}`,
             }
        }).then((res)=>{

           alert.setMessage("Reminder Sent")
           alert.setAlertStatus("success");
           alert.setShow(true)
        })
 }

 function handleSendReminderIndividualJudge(e,email){
    e.preventDefault();
    axios({
       method:"get",
       url:"https://lb0y9x24b9.execute-api.us-east-1.amazonaws.com/admin/sendReminderToIndividualJudge",
       headers: {
           'Authorization': `Bearer ${localStorage.getItem("token")}`,
         },
         params:{
            email:email
         }
    }).then((res)=>{
       console.log(res.data)
       alert.setMessage(res.data)
       alert.setAlertStatus("success");
       alert.setShow(true)
    })
}

function handleGetIdeas(e,id){
    e.preventDefault();
    axios({
        metod:"get",
        url:"https://lb0y9x24b9.execute-api.us-east-1.amazonaws.com/admin/GetJudgesScore",
        params:{
            id:id
        },
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
          }
    }).then((res)=>{
        console.log("kkk",res.data)
        setIdeaList(res.data);
        let count = 0;
        for(let i=0;i<res.data.length;i++){
            if(res.data[i].creativityAndInnovationScore===0) count++;
        }
        setIdeasEvaluated(res.data.length-count);
        setIdeasAssigned(res.data.length)
    })
}
function handleFilter(e){
    
    if(e.target.value=="") setFilteredList(judgeList)
    const filtered = judgeList.filter((panelist)=>panelist.name.includes(e.target.value))
    setFilteredList(filtered)
  }

  function handleRemovejudge(e,email){
    e.preventDefault();
    axios({
     method:"put",
     url:"https://lb0y9x24b9.execute-api.us-east-1.amazonaws.com/admin/removeRolefromUser",
     data:{
         userEmail:email,
         role:"Role_Judge"
     },
     headers: {
         'Authorization': `Bearer ${localStorage.getItem("token")}`,
       }
 }).then((res)=>{
    alert.setMessage("Judge Removed");
    alert.setAlertStatus("success");
    alert.setShow(true);
    const JudgeRemoved = judgeList.filter((panelist)=>panelist.userEmail!==email)
    setJudgeList(JudgeRemoved)
    setFilteredList(JudgeRemoved)

 })
}
  return (
    <div>
    <div className="d-flex px-5 mt-4">
      <div className="d-flex align-self-center">{`total Judges - ${judgeList.length}`}</div>
      <button onClick={handleSendReminderJudges} className="btn ms-auto" style={{ background: "#EFEDB1" }}>
        Send Reminder
      </button>
    </div>
    <div
      className="p-4 mx-5 mt-4"
      style={{ background: "#9AD0C2", height: "70vh", borderRadius: 5 }}
    >
      <div className="row mx-auto" style={{ width: "100%" }}>
        <div className="col-2">S.no</div>
        <div className="col-4">Judge Name</div>
        <div className="col-3">Judge Email</div>
        <div className="input-group input-group-sm col-3 d-flex flex-end mb-3 " style={{width:"15vw"}}>
        <input placeholder="search" type="search" onChange={(e)=>handleFilter(e)} className="form-control" />
      </div>
      </div>
      <div style={{ overflowY: "auto", width: "100%", height: "58vh" }}>
        {filteredList.map((panelist, index) => {
          return (
            <div
              className="row mx-auto p-2 mb-2"
              style={{
                width: "100%",
                background: "#ECF4D6",
                borderRadius: 5,
              }}
            >
              <div className="col-2">{index + 1}</div>
              <div className="col-4">{panelist.name}</div>
              <div className="col-4 ps-4">{panelist.userEmail}</div>
              <div
                className="col-2"
                data-bs-toggle="collapse"
                data-bs-target={`#collapseWidthExample${panelist.id}`}
                type="button"
                onClick={(e)=>handleGetIdeas(e,panelist.id)}
              >
                <img src={DropDown} height="20px"/>
              </div>
              <div style={{width:"100%"}}>
                <div
                  class="collapse"
                  id={`collapseWidthExample${panelist.id}`}
                >
                  <div  style={{width:"100%"}} >
                      <div className="row mt-2">
                      <div className="col-5 ps-5">{`ideas evaluated - ${ideasEvaluated}`}</div>
                   
                   <div className="col text-center"><img src={Bell} type="button" onClick={(e)=>handleSendReminderIndividualJudge(e,panelist.userEmail)} height="20px"/></div>
                   <div className="col text-center d-flex"  ><button  className="btn btn-sm bg-light" data-bs-toggle="modal" data-bs-target={`#staticBackdropRemovejudge${index}`}>Remove</button></div>
                     <div class="modal fade" id={`staticBackdropRemovejudge${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Are you sure to remove this Judge - {panelist.name}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
     
      <div class="modal-footer">
        
        <button type="button" onClick={(e)=>handleRemovejudge(e,panelist.userEmail)} class="btn btn-primary" data-bs-dismiss="modal">Yes</button>
      </div>
    </div>
  </div>
                   
                      </div>
                      </div>
                      <div className="p-2 mt-2" style={{background:"#f1c9c9",borderRadius:5,width:"100%"}}>
                      <div className='row mx-auto mt-2' style={{width:"100%"}}>
            <div className='col-1'>S.no</div>
            <div className='col-2'>Team Name</div>
            <div className='col-3'>presentation And Communication Score</div>
            <div className='col-3'>technical Proficiency Score</div>
            <div className='col-3'>creativity And Innovation Score</div>
         </div>
                      <div style={{overflowY:"auto",height:"30vh",width:"100%"}}>
                         {ideaList.map((idea,index)=>{
                          return(
                              <div className='row mx-auto p-2 mb-2' style={{width:"100%",background:"#ecf4d6e0",borderRadius:5}}>
                              <div className='col-1'>{index+1}</div>
                              <div className='col-2'>{idea.teamName}</div>
                              <div className='col-3 text-center'>{idea.presentationAndCommunicationScore}</div>
                              <div className='col-3 text-center'>{idea.technicalProficiencyScore}</div>
                              <div className='col-3 text-center'>{idea.creativityAndInnovationScore}</div>
                              
                        </div>
                          )
                         })}
                      </div>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>

  )
}

export default Judge
