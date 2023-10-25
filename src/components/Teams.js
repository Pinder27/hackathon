import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
export default function Team(){

    const [teamList, setTeamList] = useState([]);
  const [loader, setLoader] = useState(true);
  const [team,setTeam] = useState(true);
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
          setLoader(false);}).catch((e)=>{
            setTeam(false)
            alert(e.response.data)
          })
      }, []);

    function createData(index, name, email) {
        return { index, name, email };
      }
    
      const rows = teamList.map((participant, index) => {
        return createData(index + 1, participant.firstName, participant.username);
      });

      if(!team) return(
        <div className="d-flex justify-content-center mb-5" >
          <Link
          to="/teamdetail"
            className="mb-2 mt-5 btn btn-lg text-white col-3"
            style={{ backgroundColor: "#ef4815", boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)" }}
          >
            Get Started
          </Link>
        </div>
      )
    
    return(
        <div>
            <div className=" d-flex">
        <div className="col" style={{marginLeft:"10%",marginRight:"10%"}}>
          <p className="h5">Your Team</p>
          <div className="container p-3 mb-5" style={{backgroundColor:"#fff",borderRadius:"5px"}}>
            <table className="table" style={{ backgroundColor: "#f8f9fad6" }}>
              <thead style={{ backgroundColor: "#bdd4ea" }}>
                <tr>
                  <th scope="col">S. No.</th>
                  <th scope="col">Name</th>
                  <th scope="col" className="email-header">
                    {" "}
                    Username
                  </th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: "#f8f9fa00" }}>
                {loader ? (
                  <div class="text-center">
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : (
                  rows.map((row, index) => (
                    <tr
                      key={index}
                      className="custom-row-margin fw-semibold"
                      style={{ backgroundColor: "#f8f9fa00" }}
                    >
                      <td scope="row" className="first-cell">
                        {row.index}
                      </td>
                      <td className="">{row.name}</td>
                      <td className="">{row.email}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
       
      </div>
        </div>
    )
}