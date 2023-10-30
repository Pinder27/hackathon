import React, { useEffect, useState } from 'react'
import SubmittedDetails from './SubmittedDetails'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';

const PanelReview = ({alert}) => {
  const param = useParams();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const [feedback,setFeedback] = useState("");
  
    const submittedData={
       team:{teamName:""},
       idea:{
        title:"",
        summary:"",
        pdfUrl:""
       }
      };

      const [data,setData] = useState(submittedData);

 useEffect(()=>{
   axios({
    method:"get",
    url:"http://ec2-51-20-107-65.eu-north-1.compute.amazonaws.com:8087/v1/api/ideas/"+`${param.id}`,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
    }
   }).then((res)=>{
    console.log(res.data);
    setData(res.data);
    setLoader(false)
   })
 },[]);

 function HandleApprove(){
  axios({
    method:"put",
    url:"http://ec2-51-20-107-65.eu-north-1.compute.amazonaws.com:8087/v1/api/ideas/updateStatus/"+`${param.id}`,
    data:{
      status:"approved",
      feedback:feedback
    },
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
    }
  }).then((res)=>{
           console.log(res);
           alert.setMessage("Idea has been Reviewed!");
           alert.setAlertStatus("success")
           alert.setShow(true);
           navigate("/panelistProjectList")
  })
 }
 function HandleReject(){
  axios({
    method:"put",
    url:"http://ec2-51-20-107-65.eu-north-1.compute.amazonaws.com:8087/v1/api/ideas/updateStatus/"+`${param.id}`,
    data:{
      status:"rejected",
      feedback:feedback
    },
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
    }
  }).then((res)=>{
           console.log(res);
           alert.setMessage("Idea has been Reviewed!");
           alert.setAlertStatus("success")
           alert.setShow(true);
           navigate("/panelistProjectList")
  })
 }

  return (
    <div style={{height:"100vh"}}>    
    {
      loader?(<div class="text-center mt-5">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>):( <div>
    <div className='w-75 mx-auto'>
    <div className="mt-4">
            <div className="h3 text-center mb-5">{data.team.teamName}</div>
         
            <div className="my-2 fw-semibold h5  d-flex ">
              <div className="">Idea Title - </div>
              <div className="ms-4">{data.idea.title}</div>
            </div>
            <div className="my-2 fw-semibold h5 d-flex ">
            <p className=" ">Idea Summary - </p>
            <div className="ms-4">{data.idea.summary}</div>
            </div>
            {/* display your project field component */}
          </div>
      {/* display your project field component */}
      <SubmittedDetails 
        user="panelist"
        teamName={data.team.teamName}
        ideaTitle={data.idea.title}
        ideaSummary={data.idea.summary}
        pptUrl={""}
        pdfUrl={data.idea.pdfUrl}
        GitRepoUrl={""}
        />
    </div>
    <div className='d-flex justify-content-around mb-5'>
      <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#approve" style={{boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)"}}>Approve</button>
      <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#reject" style={{boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)"}}>Reject</button>
    </div>
   
<div class="modal fade" id="approve" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Confirm selection</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body ">
        <div>Give Feedback</div>
         <textarea onChange={(e)=>setFeedback(e.target.value)} className='container-fluid'></textarea>
      </div>
      <div class="modal-footer">
        <button onClick={HandleApprove} data-bs-dismiss="modal" type="button" class="btn btn-success">Approve</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="reject" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Confirm selection</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body ">
      <div>Give Feedback</div>
         <textarea onChange={(e)=>setFeedback(e.target.value)} className='container-fluid'></textarea>
      </div>
      <div class="modal-footer">
        <button onClick={HandleReject} data-bs-dismiss="modal"  type="button" class="btn btn-danger">Reject</button>
      </div>
    </div>
  </div>
</div>
</div>)
    }
   
    </div>
  )
}

export default PanelReview
