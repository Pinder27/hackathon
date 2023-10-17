import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import SubmittedDetails from './SubmittedDetails';
import '../assests/css/ProjectDetail.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const ProjectDetail = () => {

  const { id } = useParams();

  const YourHackathons =[
    {
      teamName:'Data Dynamos',
      ideaTitle:'Eco-Friendly Transport Planner',
      ideaURL:"/url",
      TeamList:[{
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
      },]
    },
    {
      teamName:'Byte Benders',
      ideaTitle:'Health and Wellness Assistant',
      ideaURL:"/url",
      TeamList:[{
        name: "Olivia",
        email: "olivia@gmail.com"
      },
      {
        name: "Robert",
        email: "robert@gmail.com"
      },
      {
        name: "Sophia",
        email: "sophia@gmail.com"
      },
      {
        name: "William",
        email: "william@gmail.com"
    }]
    },
    {
      teamName:'Hack Mavericks',
      ideaTitle:'Smart Home Energy Management',
      ideaURL:"/url",
      TeamList:[{
        name: "Emma",
        email: "emma@gmail.com"
      },
      {
        name: "James",
        email: "james@gmail.com"
      },
      {
        name: "Ava",
        email: "ava@gmail.com"
      },
      {
        name: "Alexander",
        email: "alexander@gmail.com"
      }]
    },
    {
      teamName:'Pixel Pioneers',
      ideaTitle:'Education for All',
      ideaURL:"/url",
      TeamList:[{
        name: "Grace",
        email: "grace@gmail.com"
      },
      {
        name: "Matthew",
        email: "matthew@gmail.com"
      },
      {
        name: "Lily",
        email: "lily@gmail.com"
      },
      {
        name: "Ethan",
        email: "ethan@gmail.com"
      }]
    },
    {
      teamName:'Data Dynamos',
      ideaTitle:'Food Waste Reduction App',
      ideaURL:"/url",
      TeamList:[{
        name: "Grace",
        email: "grace@gmail.com"
      },
      {
        name: "Matthew",
        email: "matthew@gmail.com"
      },
      {
        name: "Lily",
        email: "lily@gmail.com"
      },
      {
        name: "Ethan",
        email: "ethan@gmail.com"
      }]
    }
  
  ]
  const TeamList = YourHackathons[id-1].TeamList;

  useEffect(()=>{
         axios({
          method:"get",
          url:"http://localhost:8087/user/dashboard/impl",
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
          }
         }).then((res)=>{
          console.log(res);
         })
  },[])
  

  const submittedData={
    teamName:YourHackathons[id-1].teamName,
    ideaTitle:YourHackathons[id-1].ideaTitle,
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
    <div className='p-5 d-flex flex-column' style={{background:"linear-gradient(315deg, rgb(13 100 189) 0%, rgb(28 233 220) 100%) 100%"}} >
        
        <h2 className='mb-5 mt-3 text-center'>Hackathon 2023</h2>

      <div className=' d-flex' >
        <div className='col'>

       
        <p className='h5'>Your Team</p>

        <div className='container fluid pb-3 pt-3'>
        <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className='btn text-white px-4' style={{backgroundColor: "#ef4815", boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)"}}>Edit</button>
          <h4 className='text-center'>{submittedData.teamName}</h4>
          <table className='table' style={{backgroundColor:"#f8f9fad6"}}>
            <thead style={{ backgroundColor: "#bdd4ea" }}>
              <tr>
                <th scope="col" >S. No.</th>
                <th scope="col" >Name</th>
                <th scope="col" className="email-header">Participants Email</th>
              </tr>
            </thead>
            <tbody style={{backgroundColor:"#f8f9fa00"}}>
              {rows.map((row, index) => (
                <tr key={index} className="custom-row-margin fw-semibold" style={{backgroundColor:"#f8f9fa00"}}>
                  <td scope="row" className='first-cell'>
                    {row.index}
                  </ td>
                  <td className=''>{row.name}</td>
                  <td className=''>{row.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
        {/* display your project field component */}
        <div className='col'>
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
      </div>
      
    </div>
  );
};

export default ProjectDetail;
