import React from 'react'
import SubmittedDetails from './SubmittedDetails'
import Navbar from './Navbar';

const PanelReview = () => {

  const submittedData = {
    teamName: "hackathon_team_name",
    ideaTitle: "idea_title",
    ideaDescription: "idea description",
    ideaSolution: "solution",
    pptUrl: "https://www.africau.edu/images/default/sample.pdf",
    pdfUrl: "https://www.africau.edu/images/default/sample.pdf",
    GitRepoUrl: "https://github.com/play-with-docker/play-with-kubernetes.github.io"
  };


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
        <div className='mt-5 mb-3 d-flex justify-content-between'>
        <button type="button" class="btn btn-success btn-lg px-5 mx-5 fw-semibold">Approve</button>
        <button type="button" class="btn btn-danger btn-lg px-5 mx-5 fw-semibold">Reject</button>
        </div>
      </div>
    </>
  )
}

export default PanelReview
