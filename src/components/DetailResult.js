import bgImage from "../assests/images/pexels-alexander-kovalev-2847648.jpg";
import React, { useEffect, useState,useRef } from "react";
import axios from "axios";
export default function DetailResult() {
   const [teams, setTeams] = useState([
    {
      name: "hackathons",
      idea: "ML OS",
    },
    {
      name: "Nortons",
      idea: "finance app",
    },
    {
      name: "Avastas",
      idea: "VM ware",
    },
    {
      name: "Posideions",
      idea: "Protocoling system",
    },
  ]);
  useEffect(()=>{
       axios({
        method:"get",
        url:"http://ec2-51-20-107-65.eu-north-1.compute.amazonaws.com:8087/api/teamScores"
       }).then((res)=>{
              setTeams(res.data);
       })
  },[])
  
   
  var i = 1;
  return (
    <div
      className="d-flex p-5"
      style={{
        background:"#fff",
      }}
    >
      <div className="col">
      <div className=" mt-4 h4">Hackathon 2023</div>
      <div className="mx-5">
        <div>
          <table class="table table-striped p-5">
            <thead>
              <tr>
                <th scope="col">Rank</th>
                <th scope="col">Team Name</th>
                <th scope="col">Score</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team,index)=>{
                return(
                  <tr>
                <th scope="row">{index+1}</th>
                <td>{team.teamName}</td>
                <td>{team.score}</td>
              </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      </div>
      
    </div>
  );
}
