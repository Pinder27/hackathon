import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SubmitImplementation({setImplSubmitted}){
    const [description,setDescription] = useState("");
    const [git,setGit] = useState("");
    const [ppt,setPpt] = useState("");
    const [recording,setRecording] = useState("");


    function HandleSubmit(e){
        e.preventDefault();
        axios({
            method: "post",
            url: "http://ec2-51-20-107-65.eu-north-1.compute.amazonaws.com:8087/api/submitImplementation",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            data:{
                gitHubURL: git,
                recordingURL: recording,
                pptURL: ppt,
                description: description
              }
          }).then((res)=>{
              console.log("submit impl", res.data);
              setImplSubmitted(true);
          }).catch((e)=>{
            console.log(e)
            alert(e.response.data.message)
          });
    }
    return(
        <div>
            <form className="p-5 mt-2" style={{backgroundColor:"#fff"}}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Description</label>
    <input type="text" onChange={(e)=>setDescription(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"> upload PPT</label>
    <input type="text" onChange={(e)=>setPpt(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Upload Recording</label>
    <input type="text" onChange={(e)=>setRecording(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Upload gitHubURL</label>
    <input type="text" onChange={(e)=>setGit(e.target.value)} class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" onClick={HandleSubmit} class="btn btn-primary">Submit</button>
</form>
        </div>
    )
}