import React, { useEffect, useState } from "react";
import documentIcon from "../assests/images/document.svg";
import { Link } from "react-router-dom";
import axios from "axios";

const SubmittedDetails = ({
  user,
  ideaTitle,
  documentation,
  pptUrl,
  pdfUrl,
  GitRepoUrl,
  implementationId,
}) => {
  const [ppt, setPpt] = useState(pptUrl);
  const [pdf, setPdf] = useState(pdfUrl);
  const [git, setGit] = useState(GitRepoUrl);
  console.log(GitRepoUrl);

  function HandleSubmit() {
    var data = {};
    if (ppt !== "") {
      data.pptURL = ppt;
    }
    if (git !== "") {
      data.gitHubURL = git;
    }
    axios({
      method: "put",
      url: "http://localhost:8087/api/implementations/" + `${implementationId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: data,
    }).then((res) => {
      console.log(res.data);
      alert("files updated");
    });
  }
  return (
    <div className="mb-5 d-flex flex-column">
      {user == "User" && <p className="h5 ms-auto">Your Project</p>}
      {user == "User" && (
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
      )}
      <p className="h5 mx-auto">{ideaTitle}</p>
      <div style={{ backgroundColor: "#f8f9fa" }} className="p-4">
        <div className="d-flex justify-content-between align-items-center mb-4"></div>
        <table
          style={{ backgroundColor: "#f8f9fa00", width: "100%" }}
          className="table-row-gape mb-4"
        >
          <tbody>
           {user!=="panelist"&& <tr>
              <td className="fw-semibold">PPT:-</td>
              <td>
                <Link to={pptUrl} target={pptUrl} className="link-to-text">
                  <img
                    src={documentIcon}
                    style={{ width: "25px" }}
                    className="mx-1"
                  />
                  Click here to view the PPT
                </Link>
              </td>
            </tr>}
            <tr>
              <td className="fw-semibold">Documentation:-</td>
              <td>
                <a
                  download="Addresources.js"
                  href={pdfUrl}
                  target="_blank"
                  className="link-to-text"
                >
                  <img
                    src={documentIcon}
                    style={{ width: "25px" }}
                    className="mx-1"
                  />
                  Click here to view the documentation
                </a>
              </td>
            </tr>
           {user!=="panelist" && <tr>
              <td className="fw-semibold mb-3">Github Repository:-</td>
              <td>
                <div
                  style={{
                    width: "75%",
                    overflowX: "auto", // Add this CSS property for horizontal scrolling
                    backgroundColor: "rgb(233 233 233)",
                  }}
                >
                  <a
                    type="text"
                    className="no-border p-1 py-1 d-flex"
                    target="_blank"
                    href={GitRepoUrl}
                  >
                    {git}
                  </a>
                </div>
              </td>
            </tr>}
          </tbody>
        </table>
      </div>
      <div
        class="modal fade"
        id="staticBackdrop"
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
                {user!=="panelist"&&<div class="row mb-3">
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
                </div>}
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-2 col-form-label">
                    Documentation
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      value={pdf}
                      class="form-control"
                      id="inputEmail3"
                      onChange={(e) => setPdf(e.target.value)}
                    />
                  </div>
                </div>
               {user!=="panelist"&&<div class="row mb-3">
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
                </div>}
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
};

export default SubmittedDetails;
