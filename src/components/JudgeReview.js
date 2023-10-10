import React from 'react'
import { useState } from 'react';
import Navbar from './Navbar';
import SubmittedDetails from './SubmittedDetails';
import '../assests/css/JudgeReview.css'

const JudgeReview = () => {

  const [rating, setRating] = useState(0);

  const submittedData = {
    teamName: "hackathon_team_name",
    ideaTitle: "idea_title",
    ideaDescription: "idea description",
    ideaSolution: "solution",
    pptUrl: "https://www.africau.edu/images/default/sample.pdf",
    pdfUrl: "https://www.africau.edu/images/default/sample.pdf",
    GitRepoUrl: "https://github.com/play-with-docker/play-with-kubernetes.github.io"
  };


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
 }

  return (
    <>
      <Navbar />

      <div className='w-75 mx-auto  mt-5'>
        <div className='my-2 fw-semibold'>
          <p >Team Name:-  &emsp;&emsp;   {submittedData.teamName}</p>
        </div>
        <div className='my-2 fw-semibold'>
          <span>Idea:-  &emsp;&emsp;&emsp;&emsp;&emsp;&ensp;   {submittedData.ideaTitle}</span>
        </div>
        <p className='mb-0 mt-5 fw-semibold'>
          Idea Summary
        </p>
        <input className="border-0 p-2" value={submittedData.ideaDescription} style={{ width: "100%", backgroundColor: "#e0dede" }} />
        {/* display your project field component */}
        <SubmittedDetails
          user="Panelist"
          teamName={submittedData.teamName}
          ideaTitle={submittedData.ideaTitle}
          ideaSolution={submittedData.ideaSolution}
          pptUrl={submittedData.pptUrl}
          pdfUrl={submittedData.pdfUrl}
          GitRepoUrl={submittedData.GitRepoUrl}
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
      </div>
    </>
  )
}

export default JudgeReview
