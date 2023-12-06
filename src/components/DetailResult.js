import bgImage from "../assests/images/pexels-alexander-kovalev-2847648.jpg";
import React, { useEffect, useState,useRef } from "react";
import axios from "axios";
export default function DetailResult() {
  
  const [teams, setTeams] = useState([]);
  const [filteredList, setFilteredList] = useState(teams);

  function handleFilter(e) {
    if (e.target.value == "") setFilteredList(teams);
    const filtered = teams.filter((team) =>
      team.teamName.includes(e.target.value)
    );
    setFilteredList(filtered);
  }
  useEffect(()=>{
       axios({
        method:"get",
        url:"https://lb0y9x24b9.execute-api.us-east-1.amazonaws.com/api/teamScores"
       }).then((res)=>{
              console.log(res.data)
              setTeams(res.data);
              setFilteredList(res.data)
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
      <div>
      <div className="input-group input-group-sm ms-auto me-5 " style={{width:"15vw"}} >
        <input placeholder="search" onChange={handleFilter} type="search"  className="form-control" />
      </div>
      </div>
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
              {filteredList.map((team,index)=>{
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
