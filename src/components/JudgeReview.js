import React, { useEffect } from 'react'
import { useState } from 'react';
import SubmittedDetails from './SubmittedDetails';
import '../assests/css/JudgeReview.css'
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';


const JudgeReview = () => {
  const param = useParams();
  const navigate = useNavigate();

  const [rating, setRating] = useState(0);
  

 
  
  const submittedData = {
    teamName: "hackathon_team_name",
    ideaTitle: "idea_title",
    ideaDescription: "idea description",
    ideaSolution: "solution",
    pptURL: "https://www.africau.edu/images/default/sample.pdf",
    pdfUrl: "https://www.africau.edu/images/default/sample.pdf",
    gitHubURL: "https://github.com/play-with-docker/play-with-kubernetes.github.io",
    idea:{
      title:""
    },
    implementation:{
      description:""
    }
  };
  const [data,setData] = useState(submittedData)
  const [loader,setLoader] = useState(true)

  useEffect(()=>{
    axios({
      method:"get",
      url:"https://3alj5tgxd8.execute-api.us-east-1.amazonaws.com/dev/api/implementations/"+`${param.id}`,
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      }
    }).then((res)=>{
            console.log(res.data); 
            setData(res.data)     
            setLoader(false)
    })
  },[])

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const renderRatingStars = () => {
    const stars = [];
    for (let i = 1; i <= 10; i++) {
      stars.push(
        <button
          key={i}
          className={`star ${i === rating ? 'filled' : ''} mx-1 p-1 px-3`}
          onClick={() => handleRatingChange(i)}
        >

          {i}
        </button>
      );
    }
    return stars;
  };

 const submit= () =>{
  console.log(rating);
  axios({
    method:"psot",
    url:"https://3alj5tgxd8.execute-api.us-east-1.amazonaws.com/dev/api/implementations/addScores",
    data:{score:rating},
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
        }
      }).then((res)=>{
              console.log(res.data);
              alert("project evaluated")
              navigate("/JudgeProjectList")
              
      })
 }

  return (
    <div className='p-5' style={{height:"150vh"}}>
      {loader?(<div class="text-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>):(
      <div className='w-75 mx-auto mt-5' >
        <div className='' >
        <div className='my-2 fw-semibold'>
          <p className='h5' >Team Name:- {data.teamName}</p>
        </div>
        <div className='my-2 fw-semibold h5'>
          <span>Idea:-{data.idea.title}</span>
        </div>
        <p className='mb-0 mt-5 fw-semibold h5'>
          Idea Summary
        </p>
        <div className="border-0 p-2 h5"  >
        {data.idea.summary}
          </div>
        {/* display your project field component */}
        </div>
        <SubmittedDetails
          user="Panelist"
          teamName={data.teamName}
          ideaTitle={data.ideaTitle}
          documentation={data.implementation.description}
          pptUrl={data.implementation.pptURL}
          pdfUrl={data.pdfUrl}
          GitRepoUrl={data.implementation.gitHubURL}
        />
        

        {/* scale */}
        <div className="text-center mt-4">{renderRatingStars()}</div>
        <p className='text-center mt-2' style={{ fontSize: "20px" }}>You rated this project <b>{rating}</b> out of 10.</p>
        <div className='text-center'>
          <button className='text-center btn submit-btn fw-semibold text-white py-2 px-5 mb-4 mt-3'
            onClick={submit}>
            Rate
          </button>
        </div>
        
      </div>)}
      

      
    </div>
  )
}

export default JudgeReview
