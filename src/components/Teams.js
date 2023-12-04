import React, { useEffect, useState,useRef } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import Copy from "../assests/images/copy-1.png"
import Check from "../assests/images/check.png"
export default function Team({teamList,team,teamCode}){
  
  const [copied,setCopied] = useState(false);
  const inputRef = useRef(null);
  const handleCopy = (e) => {
    // Manually select and copy the text from the input field
    if (inputRef.current) {
      // Copy text to clipboard using the Clipboard API
      navigator.clipboard.writeText(inputRef.current.value)
        .then(() => {
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000);
        })
        .catch((err) => {
          console.error('Failed to copy text to clipboard', err);
        });
    }
  };

    function createData(index, name, email) {
        return { index, name, email };
      }
    
      const rows = teamList.map((participant, index) => {
        return createData(index + 1, participant.firstName, participant.username);
      });

      if(!team) return(
        <div className="d-flex justify-content-center mb-5" >
          <Link
          to="/createTeam"
            className="mb-2 mt-5 btn btn-lg text-white col-3 me-2"
            style={{ backgroundColor: "#ef4815", boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)" }}
          >
             Create Team
          </Link>
          <Link
          to="/joinTeam"
            className="mb-2 mt-5 btn btn-lg text-white col-3"
            style={{ backgroundColor: "#ef4815", boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)" }}
          >
             Join Team
          </Link>
        </div>
      )
    
    return(
        <div className="mt-5">
            <div className=" d-flex">
        <div className="col" style={{marginLeft:"10%",marginRight:"10%"}}>
          <div className="d-flex">
          <p className="h5">Your Team</p>
           <div className="ms-auto">TeamCode - </div>
           <input className="ms-2 mt-1" ref={inputRef} type="text" readOnly defaultValue={teamCode} style={{width:"70px",height:"20px"}} />
           
            {copied?(<img src={Check} className=""  height="30px"/>):(<img src={Copy} type="button" onClick={handleCopy}  height="30px"/>)}
          
           </div>
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
                 
                 { rows.map((row, index) => (
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
                  ))}
                
              </tbody>
            </table>
          </div>
        </div>
       
      </div>
        </div>
    )
}