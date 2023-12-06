import React, { useState, useEffect,useRef } from 'react';
import axios from "axios"
import Copy from "../assests/images/copy-1.png"
import Check from "../assests/images/check.png"

export default function CreateTeam({alert}){
    const [teamName,setTeamName] = useState("");
    const [teamCode,setTeamCode] = useState("");
    const [copied,setCopied] = useState(false);
    const [generated,setGenerated] = useState(true);
    const inputRef1 = useRef(null);
  const handleCopy = (e) => {
    // Manually select and copy the text from the input field
    if (inputRef1.current) {
      // Copy text to clipboard using the Clipboard API
      navigator.clipboard.writeText(inputRef1.current.value)
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
    function handleCreateTeam(){
        axios({
            method: "post",
            url: "https://lb0y9x24b9.execute-api.us-east-1.amazonaws.com/TeamRegistration/createTeam",
            data:{
                teamName:teamName,
                teamSummary:""
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }).then((res)=>{
            setTeamCode(res.data);
            setGenerated(true);
            alert.setMessage("Team code generated")
            alert.setAlertStatus("success")
            alert.setShow(true);
          }).catch((e)=>{
            console.log(e.response.data)
            alert.setMessage(e.response.data)
            alert.setAlertStatus("error")
            alert.setShow(true);
          })
    }
    return(
        <div className="p-1" style={{height:"90vh",background:"#e2eaf9",width:"100%"}}>
            <div className="px-2 pt-2 pb-3" style={{margin:"7% 30% 10% 30%",background:"#fff",borderRadius:5}} >
             { !generated&& 
             <div> <div className="text-center h5 mt-3 mb-4">Create Team</div>
                <div className="">
                    <div className="d-flex justify-content-center mt-4" style={{width:"100%"}}>
                        <label>Team Name - </label>
                        <input onChange={(e)=>setTeamName(e.target.value)} className="ms-2"/>
                    </div>
                    <div className="d-flex justify-content-center" style={{width:"100%"}}>
                        <button onClick={handleCreateTeam} className="bg-dark text-white btn mt-4">
                            Generate code
                        </button>
                    </div>
                 
                </div>
                </div>}
                {generated&& <div className='d-flex flex-column p-5' style={{width:"100%"}}>
                    <div className='d-flex justify-content-center'>
                    <input className="ms-2 mt-1" ref={inputRef1} type="text" readOnly defaultValue={teamCode}  />
           
           {copied?(<img src={Check} className=""  height="30px"/>):(<img src={Copy} type="button" onClick={handleCopy}  height="30px"/>)}
           </div>
           <p className='mt-3'>Share this code with your team members and ask them to join in join team section</p>
           <p className='mt-3'>(There can be maximum 4 members in a team)</p>
                    </div>}
            </div>
           
        </div>
    )
}