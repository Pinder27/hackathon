import React from 'react'
import SubmittedDetails from './components/SubmittedDetails'

const PanelReview = () => {

    const submittedData={
        teamName:"hackathon_team_name",
        ideaTitle:"idea_title",
        ideaDescription:"idea description",
        ideaSolution:"solution",
        pptUrl:"https://www.africau.edu/images/default/sample.pdf",
        pdfUrl:"https://www.africau.edu/images/default/sample.pdf",
        GitRepoUrl:"https://github.com/play-with-docker/play-with-kubernetes.github.io"
      };


  return (
    <div className='w-75 mx-auto'>
     <div>
        <span>Team Name:- </span>
        <span>{submittedData.teamName}</span>
     </div>
     <div>
        <span>Idea:- </span>
        <span>{submittedData.ideaTitle}</span>
     </div>
     <p>
       Idea Summary 
     </p>
     <input value={submittedData.ideaDescription}/>
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
    </div>
  )
}

export default PanelReview
