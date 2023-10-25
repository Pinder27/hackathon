import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import SubmittedDetails from "./SubmittedDetails";
import "../assests/css/ProjectDetail.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Implementation from "./implementaion";
import Idea from "./Idea";
import Team from "./Teams";

const ProjectDetail = () => {

 
  
  const [implementaion, setImplimentation] = useState(false);
  const [idea, setIdea] = useState(false);



  return (
    <div
      className="p-5 d-flex flex-column"
      style={{
        background:
         "#e2eaf9"
      }}
    >
      <h2 className="mb-5 mt-3 text-center">Hackathon 2023</h2>
      <Team/>
   
      <div className="d-flex justify-content-center"><button className="btn btn-dark col-4 mb-2 " onClick={(e)=>{setIdea(!idea)}}>Idea</button></div>
      
      {idea&&<Idea/>}
      <div className="d-flex justify-content-center">
      <button className="btn btn-dark col-4 mt-5 mb-2" onClick={(e)=>{
             setImplimentation(!implementaion)
      }}>implementations</button>
      </div>
     
      {implementaion&&<Implementation/>}
    </div>
  );
};

export default ProjectDetail;
