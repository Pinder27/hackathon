import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import SubmittedDetails from './SubmittedDetails';
import '../assests/css/ProjectDetail.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const ProjectDetail = () => {
  
  const submittedData={
    teamName:"",
    ideaTitle:"",
    ideaDescription:"idea description",
    ideaSolution:"solution",
    pptUrl:"https://www.africau.edu/images/default/sample.pdf",
    pdfUrl:"https://www.africau.edu/images/default/sample.pdf",
    GitRepoUrl:"https://github.com/play-with-docker/play-with-kubernetes.github.io",
    implementationId:1
  };


const [data,setData] = useState(submittedData);
const [teamList,setTeamList]  = useState([]);
const [loader,setLoader]  = useState(true);
const [idea,setIdea] = useState({
  ideas:[{title:"",
  pdfUrl:"",
}],
  teamName:""
})

  useEffect(()=>{
         axios({
          method:"get",
          url:"https://3alj5tgxd8.execute-api.us-east-1.amazonaws.com/dev/user/dashboard/impl",
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
          }
         }).then((res)=>{
          console.log("imp - ",res.data[0]);
          setData(res.data[0]);
          axios({
            method:"get",
            url:"https://3alj5tgxd8.execute-api.us-east-1.amazonaws.com/dev/user/dashboard/teamDetails",
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("token")}`,
            }
          }).then((res)=>{
            console.log("team res - ",res.data);
            var team = res.data.members;
            team.push(res.data.leader);
            setTeamList(team);
            setLoader(false)
            axios({
              method:"get",
              url:"https://3alj5tgxd8.execute-api.us-east-1.amazonaws.com/dev/user/dashboard/idea",
              headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
              }
            }).then((res)=>{
              console.log("idea - ",res.data)
                   setIdea(res.data);
            })
          })

         })
  },[])
  


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

   
  const rows = teamList.map((participant, index) => {
    return createData(index + 1, participant.firstName, participant.username);
  });

  return (
    <div className='p-5 d-flex flex-column' style={{background:"linear-gradient(315deg, rgb(13 100 189) 0%, rgb(28 233 220) 100%) 100%"}} >
        
        <h2 className='mb-5 mt-3 text-center'>Hackathon 2023</h2>

      <div className=' d-flex' >
        <div className='col'>

       
        <p className='h5 mb-5'>Your Team</p>
        <div className='h5 text-center pt-2 mt-5'>{idea.teamName}</div>
        <div className='container fluid pb-3 '>
       
          
          <table className='table' style={{backgroundColor:"#f8f9fad6"}}>
            <thead style={{ backgroundColor: "#bdd4ea" }}>
              <tr>
                <th scope="col" >S. No.</th>
                <th scope="col" >Name</th>
                <th scope="col" className="email-header"> Username</th>
              </tr>
            </thead>
            <tbody style={{backgroundColor:"#f8f9fa00"}}>

              {loader?(<div class="text-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>):(rows.map((row, index) => (
                <tr key={index} className="custom-row-margin fw-semibold" style={{backgroundColor:"#f8f9fa00"}}>
                  <td scope="row" className='first-cell'>
                    {row.index}
                  </ td>
                  <td className=''>{row.name}</td>
                  <td className=''>{row.email}</td>
                </tr>
              )))}
            </tbody>
          </table>
        </div>
        </div>
        {/* display your project field component */}
        <div className='col'>
        <SubmittedDetails 
        user="User"
        ideaTitle={idea.ideas[0].title}
        documentation={data.documentation}
        pptUrl={data.pptURL}
        pdfUrl={idea.ideas[0].pdfUrl}
        GitRepoUrl={data.gitHubURL}
        implementationId={data.implementationId}
        />
        </div>
      </div>
      
    </div>
  );
};

export default ProjectDetail;
