import React, { useState } from "react";

import "../assests/css/IdeaDescription.css";
import axios from "axios";
import { useNavigate } from "react-router";


const IdeaDescription = ({alert}) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  function HandleSubmit() {
    var data = {
      title: title,
      summary: summary,
      pdfUrl: pdfUrl,
    };
    axios({
      method: "post",
      url: "http://ec2-65-0-108-48.ap-south-1.compute.amazonaws.com:8087/v1/api/ideas",
      data: data,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, 'Access-Control-Allow-Origin' : '*',
  'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    }).then((res) => {
      console.log(res);
      alert.setMessage("Idea is submitted successfully!");
      alert.setAlertStatus("success")
      alert.setShow(true);
      navigate("/projectDetail");
    }).catch((e)=>{
      console.log(e)
      alert.setMessage(e.response.data);
      alert.setAlertStatus("error")
      alert.setShow(true);
    });
  }
  return (
    <div className=" p-5" style={{ backgroundColor: "#dbecf0" }}>
      <div className="">
        <h2 className="text-center mb-5">Describe your Idea</h2>
        <div
          className="idea-description-container p-3 mb-5 mt-3"
          style={{
            backgroundColor: "#f8f8f800",
            borderRadius: "5px",
            marginLeft: "15%",
            marginRight: "15%",
            
          }}
        >
          <form className="needs-validation" novalidate>
            <div class="mb-3">
              <label for="validationCustom01" class="form-label">
                Idea Name *
              </label>
              <input
                type="text"
                class="form-control shadow-sm"
                id="validationCustom01"
                required
                onChange={(e) => setTitle(e.target.value)}
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Idea Summary *
              </label>
              <textarea
                class="form-control shadow-sm"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={(e) => setSummary(e.target.value)}
              ></textarea>
            </div>

            <p className="mb-0">Upload Documentation *</p>
            <input type="text" onChange={(e) => setPdfUrl(e.target.value)} />

            <div className="d-flex justify-content-center">
              {/* <button className="btn text-white" type="submit" style={{ backgroundColor: "#ef4815", boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)" }}>
            Submit
          </button> */}
            </div>
          </form>
          <div className="d-flex justify-content-center mt-4">
            <button
              className="btn submit-btn text-white text-center"
              style={{ boxShadow: "0px 0px 8px 1px rgba(0, 0, 0, 0.2)" }}
              onClick={HandleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaDescription;
