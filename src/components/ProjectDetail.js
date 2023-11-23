import React, { useEffect, useState } from "react";
import "../assests/css/ProjectDetail.css";
import axios from "axios";
import Implementation from "./implementaion";
import Idea from "./Idea";
import Team from "./Teams";


const ProjectDetail = ({alert}) => {

 
  
  const [implementaion, setImplimentation] = useState(false);
  const [idea, setIdea] = useState(false);
  const [teamList, setTeamList] = useState([]);
  const [loader, setLoader] = useState(true);
  const [team,setTeam] = useState(true);
  const [data,setData] = useState({})
  const [title,setTitle] = useState("");
  const [summary,setSummary] = useState("");
  const [documentation,setDocumentation] = useState("");
  const [status,setStatus] = useState(false);
  const [role,setRole] = useState("user")

  
useEffect(()=>{
  axios({
    method: "get",
    url: "http://localhost:8087/user/userRole",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((res)=>{
    console.log(res)
    setRole(res.data.roles[res.data.roles.length-1])
  })
},[])

 useEffect(() => {
     axios({
       method: "get",
       url: "http://localhost:8087/user/dashboard/teamDetails",
       headers: {
         Authorization: `Bearer ${localStorage.getItem("token")}`,
       },
     }).then((res) => {
       console.log("team res - ", res.data);
       var team = res.data.members;
       team.push(res.data.leader);
       setTeamList(team);
       setLoader(false);
      }).catch((e)=>{
         setTeam(false)
         setLoader(false)
       })
   }, []);

   useEffect(()=>{
    axios({
        method: "get",
        url: "http://localhost:8087/user/dashboard/idea",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res)=>{
        console.log("idea",res.data)
        setData(res.data);
        setTitle(res.data.ideas[0].title)
        setDocumentation(res.data.ideas[0].pdfUrl)
        setSummary(res.data.ideas[0].summary)
        if(res.data.ideas[0].status==="approved")
        setStatus(true);
      }).catch((e)=>{
        setTeam(false)
      })
},[])


  return (
    <div
      className="p-5 d-flex flex-column"
      style={{
        background:
         "#e2eaf9"
      }}
    >
      {loader?( <div class="text-center">
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>):(<div>
      <h2 className="mb-5 mt-3 text-center">Hackathon 2023</h2>
      
      <Team teamList={teamList} team={team}/>
   
    {  team&&<div className="d-flex justify-content-center"><button className="btn btn-dark col-4 mb-2 " onClick={(e)=>{setIdea(!idea)}}>Idea</button></div>}
      
      {(idea)&&<Idea status={status} title={title} role={role} setTitle={(setTitle)} alert={alert} summary={summary} setSummary={(setSummary)} documentation={documentation} setDocumentation={setDocumentation} id={data.ideas[0].id}/>}
     {(team&&status)&& <div className="d-flex justify-content-center">
      <button className="btn btn-dark col-4 mt-5 mb-2" onClick={(e)=>{
             setImplimentation(!implementaion)
      }}>implementations</button>
      </div>}
     
      {(implementaion)&&<Implementation role={role} alert={alert}/>}
      </div>)}
      
    </div>
  );
};

export default ProjectDetail;
