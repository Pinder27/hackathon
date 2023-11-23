import React, { useEffect, useState } from "react";
import axios from "axios";
import SubmitImplementation from "./SubmitImplementation";
import EditIcon from "../assests/images/edit3.png"
import documentIcon from "../assests/images/document.svg";
import { Link } from "react-router-dom";

export default function Implementation({alert,role}) {
  const [data, setData] = useState({});
  const [implSubmitted, setImplSubmitted] = useState(true);
  const [ppt, setPpt] = useState("");
  const [git, setGit] = useState("");
  const [description, setDescription] = useState("");
  const [recording, setRecording] = useState("");
  const [loader,setLoader] = useState(true)
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8087/user/dashboard/impl",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
         'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    }).then((res) => {
      console.log("impl", res.data[0]);
      if (res.data[0] === undefined) {
        console.log("")
        setImplSubmitted(false);
     }

     else{
         setData(res.data[0]);
         setDescription(res.data[0].description);
         setGit(res.data[0].gitHubURL);
         setPpt(res.data[0].pptURL);
         setRecording(res.data[0].recordingURL);
         

     }
     setLoader(false)
      
    });
  }, []);

  function HandleSubmit() {
    var updateData = {
      gitHubURL: git,
      recordingURL: recording,
      pptURL: ppt,
      description: description,
    };
    axios({
      method: "put",
      url: "http://localhost:8087/api/implementations/" + `${data.implementationId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, 'Access-Control-Allow-Origin' : '*',
  'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
      data: updateData,
    }).then((res) => {
      console.log(res.data);
      alert.setMessage("Your implementations has been updated!");
      alert.setAlertStatus("success")
      alert.setShow(true);
    }).catch((e)=>{
      if(e.response.data.message=="Forbidden"){
        alert.setMessage("Only Leader can Edit")
        alert.setAlertStatus("error")
        alert.setShow(true);
      }
    });
  }
  return (
    <div className="p-5" style={{backgroundColor:"#fff",marginLeft:"10%",marginRight:"10%",borderRadius:"5px"}}>
      {loader?(<div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>):(implSubmitted ? (
        <div>
          {role==="Role_Leader"&&<div className="d-flex">
          <img src={EditIcon}  data-bs-toggle="modal"
            data-bs-target="#staticBackdrop1"
            className="btn text-white  ms-auto px-4 "
            height="40px"/>
            </div>
            }
          <table class="table">
            <tbody>
              <tr>
                <th scope="row">Description</th>
                <td><p className="container">{description}</p></td>
              </tr>
              <tr>
                <th scope="row">PPT</th>
                <td> <Link to={ppt} target={ppt} className="link-to-text">
                  <img
                    src={documentIcon}
                    style={{ width: "25px" }}
                    className="mx-1"
                  />
                  Click here to view the PPT
                </Link></td>
              </tr>
              <tr>
                <th scope="row">Recording</th>
                <td><Link to={recording} target={recording} className="link-to-text">
                  <img
                    src={documentIcon}
                    style={{ width: "25px" }}
                    className="mx-1"
                  />
                  Click here to view the Recording
                </Link></td>
              </tr>
              <tr>
                <th scope="row">GitRepoUrl</th>
                <td><Link to={git} target={git} className="link-to-text">
                  <img
                    src={documentIcon}
                    style={{ width: "25px" }}
                    className="mx-1"
                  />
                  Click here to view the git repo
                </Link></td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <SubmitImplementation recording={recording} description={description} ppt={ppt} git={git} setRecording={setRecording} setPpt={setPpt} setGit={setGit} setDescription={setDescription} setImplSubmitted={setImplSubmitted} />
      ))}
      <div
        class="modal fade"
        id="staticBackdrop1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Edit
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-2 col-form-label">
                    ppt
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      value={ppt}
                      class="form-control"
                      id="inputEmail3"
                      onChange={(e) => setPpt(e.target.value)}
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-2 col-form-label">
                   Description
                  </label>
                  <div class="col-sm-10">
                    <textarea
                      type="text"
                      value={description}
                      class="form-control"
                      id="inputEmail3"
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-2 col-form-label">
                    Recording
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      value={recording}
                      class="form-control"
                      id="inputEmail3"
                      onChange={(e) => setRecording(e.target.value)}
                    />
                  </div>
                </div>
               <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-2 col-form-label">
                    Github-repo
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      value={git}
                      id="inputEmail3"
                      onChange={(e) => setGit(e.target.value)}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                onClick={HandleSubmit}
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
