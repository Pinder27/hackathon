import React, { useEffect, useState } from "react";
import axios from "axios";
import EditIcon from "../assests/images/edit3.png"


export default function Idea({setTitle,setDocumentation,setSummary,title,documentation,summary,id,alert}){

  

    function HandleSubmit(e){
       e.preventDefault();
       console.log({
        title: title,
        summary: summary,
        pdfUrl: documentation,
      })
        axios({
            method: "put",
            url: "http://localhost:8087/v1/api/ideas/"+`${id}`,
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            data:{
                title: title,
                summary: summary,
                pdfUrl: documentation,
              },
          }).then((res)=>{
            console.log("editted",res.data);
           
            alert.setMessage("Your idea has been updated.");
            alert.setAlertStatus("success")
            alert.setShow(true);
          })
    }
    return(
        <div className="p-5 mb-5" style={{backgroundColor:"#fff",marginLeft:"10%",marginRight:"10%",borderRadius:"5px"}}>
               <div>
               <div className=" d-flex">
          <img src={EditIcon}  data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            className="btn text-white  ms-auto px-4 "
            height="40px"/>
            </div>
<table class="table" >
          

  <tbody>
    <tr>
      <th scope="row">Idea Ttile</th>
      <td>{title}</td>
    </tr>
    <tr>
      <th scope="row">Summary</th>
      <td>{summary}</td>

    </tr>
    <tr>
      <th scope="row">Documentation</th>
      <td colspan="2"><a target="_blank" href={documentation}>{documentation}</a></td>
    </tr>
  </tbody>
</table>
</div>
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Idea Title</label>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Summary</label>
    <input type="text" value={summary} onChange={(e)=>setSummary(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Documentation</label>
    <input type="text" value={documentation} onChange={(e)=>setDocumentation(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  
 
  <button type="submit" onClick={HandleSubmit} data-bs-dismiss="modal" class="btn btn-primary">Submit</button>
</form>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}