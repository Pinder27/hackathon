import React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import documentIcon from './Images/document.svg'
import SubmittedDetails from './components/SubmittedDetails';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const TeamList = [
    {
      name: "Anuj",
      email: "anuj@gmail.com"
    },
    {
      name: "John",
      email: "john@gmail.com"
    },
    {
      name: "Jane",
      email: "jane@gmail.com"
    },
    {
      name: "Michael",
      email: "michael@gmail.com"
    }
  ];

  const submittedData={
    teamName:"Team Name",
    ideaTitle:"idea_title",
    ideaDescription:"idea description",
    ideaSolution:"solution",
    pptUrl:"https://www.africau.edu/images/default/sample.pdf",
    pdfUrl:"https://www.africau.edu/images/default/sample.pdf",
    GitRepoUrl:"https://github.com/play-with-docker/play-with-kubernetes.github.io"
  };


  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#e3e8f7',
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: '#ffffff',
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  function createData(index, name, email) {
    return { index, name, email };
  }

  const rows = TeamList.map((participant, index) => {
    return createData(index + 1, participant.name, participant.email);
  });

  return (
    <>
      <div className='project-detail-container'>
        <h2 className='mb-5'>Hackathon name</h2>
        <p style={{fontSize:"25px"}}>Your Team</p>

        <div style={{padding: "5px" }}>
          <h4 className='text-center'>{submittedData.teamName}</h4>
          <table className='table-row-gape'>
            <thead style={{ backgroundColor: "#bdd4ea" }}>
              <tr>
                <th scope="col" style={{paddingLeft:"4%"}}>S. No.</th>
                <th scope="col" style={{paddingLeft:"6%"}}>Name</th>
                <th scope="col" className="email-header">Participants Email</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="custom-row-margin fw-semibold">
                  <td scope="row" className='first-cell'>
                    {row.index}
                  </ td>
                  <td className='second-cell'>{row.name}</td>
                  <td className='third-cell'>{row.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* display your project field component */}
        <SubmittedDetails 
        user="Participant"
        teamName={submittedData.teamName}
        ideaTitle={submittedData.ideaTitle}
        ideaSolution={submittedData.ideaSolution}
        pptUrl={submittedData.pptUrl}
        pdfUrl={submittedData.pdfUrl}
        GitRepoUrl={submittedData.GitRepoUrl}
        />
      </div>
    </>
  );
};

export default ProjectDetail;
