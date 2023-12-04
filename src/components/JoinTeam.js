import React, { useState, useEffect,useRef } from 'react';
import axios from "axios"
import {useNavigate} from "react-router-dom"
export default function JoinTeam({alert}){
    const [teamCode,setTeamCode] = useState("");
    const navigate = useNavigate();
    function handleJoinTeam(){
        axios({
            method: "post",
            url: "https://lb0y9x24b9.execute-api.us-east-1.amazonaws.com/TeamRegistration/joinTeam",
            params:{
                teamCode:teamCode
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }).then((res)=>{
            alert.setMessage("Team Joined successfully")
            alert.setAlertStatus("success")
            alert.setShow(true);
            navigate('/projectDetail')
          }).catch((e)=>{
            console.log(e.response.data)
            alert.setMessage(e.response.data)
            alert.setAlertStatus("error")
            alert.setShow(true);
          })
    }
    return(
        <div className="p-1" style={{height:"90vh",background:"#e2eaf9"}}>
            <div className="px-2 pt-2 pb-3" style={{margin:"7% 30% 10% 30%",background:"#fff",borderRadius:5}}>
                <div className="text-center h5 mt-3 mb-4">Join Team</div>
                <div className="d-flex justify-content-center mb-4">
                    <label>Team Code - </label>
                    <input onChange={(e)=>setTeamCode(e.target.value)} className="ms-2"/>
                </div>
                <div className="d-flex justify-content-center mt-4 mb-3">
                    <button onClick={handleJoinTeam} className="btn bg-dark text-white px-5">
                        Join 
                    </button>
                </div>
            </div>
        </div>
    )
}