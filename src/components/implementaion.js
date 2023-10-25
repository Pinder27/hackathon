import React, { useEffect, useState } from "react";
import axios from "axios";
import SubmitImplementation from "./SubmitImplementation";

export default function Implementation() {
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
      },
    }).then((res) => {
      console.log("impl", res.data[0]);
      if (res.data[0] === undefined) {
        console.log("")
        setImplSubmitted(false);
     }

     else{
         setData(res.data[0]);
         setDescription(data.description);
         setGit(data.gitHubURL);
         setPpt(data.pptURL);
         setRecording(data.recordingURL);
         

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
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: updateData,
    }).then((res) => {
      console.log(res.data);
      alert("files updated");
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
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop1"
            className="btn text-white  ms-auto px-4 mt-3"
           
            style={{
              backgroundColor: "#ef4815",
              boxShadow: "0px 0px 8px 1px rgba(0, 0, 0, 0.2)",
            }}
          >
            Edit
          </button>
          <table class="table">
            <tbody>
              <tr>
                <th scope="row">Description</th>
                <td>{data.description}</td>
              </tr>
              <tr>
                <th scope="row">PPT</th>
                <td><a target="_blank" href={data.pptURL}>{data.pptURL}</a></td>
              </tr>
              <tr>
                <th scope="row">Recording</th>
                <td><a target="_blank" href={data.recordingURL}>{data.recordingURL}</a></td>
              </tr>
              <tr>
                <th scope="row">GitRepoUrl</th>
                <td><a target="_blank" href={data.gitHubURL}>{data.gitHubURL}</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <SubmitImplementation setImplSubmitted={setImplSubmitted} />
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
                    <input
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
