import React, { useEffect, useState } from "react";
import axios from "axios";


export default function Idea(){

    const [data,setData] = useState({})
    const [loader,setLoader] = useState(true)
    const [title,setTitle] = useState("");
    const [summary,setSummary] = useState("");
    const [documentation,setDocumentation] = useState("");

    useEffect(()=>{
        axios({
            method: "get",
            url: "http://localhost:8087/user/dashboard/idea",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }).then((res)=>{
            console.log(res.data)
            setData(res.data);
            setTitle(res.data.ideas[0].title)
            setDocumentation(res.data.ideas[0].pdfUrl)
            setSummary(res.data.ideas[0].summary)
            setLoader(false)
          })
    },[])

    function HandleSubmit(e){
       e.preventDefault();
       console.log({
        title: title,
        summary: summary,
        pdfUrl: documentation,
      })
        axios({
            method: "put",
            url: "http://localhost:8087/v1/api/ideas/"+`${data.ideas[0].id}`,
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
           
            alert(res.data)
          })
    }
    return(
        <div className="p-5 mb-5" style={{backgroundColor:"#fff",marginLeft:"10%",marginRight:"10%",borderRadius:"5px"}}>
               {loader?(<div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>):  
(
<table class="table" >
<button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            className="btn text-white  ms-auto px-4 mt-3"
           
            style={{
              backgroundColor: "#ef4815",
              boxShadow: "0px 0px 8px 1px rgba(0, 0, 0, 0.2)",
            }}
          >
            Edit
          </button>
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
</table>)}

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
  
 
  <button type="submit" onClick={HandleSubmit} class="btn btn-primary">Submit</button>
</form>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}