import React, { useEffect } from "react";
import { useState } from "react";
import SubmittedDetails from "./SubmittedDetails";
import "../assests/css/JudgeReview.css";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

const JudgeReview = ({alert}) => {
  const param = useParams();
  const navigate = useNavigate();

  const [rating1, setRating1] = useState("");
  const [rating2, setRating2] = useState("");
  const [rating3, setRating3] = useState("");
  const [sfeedback, setSfeedback] = useState("");
  const [wfeedback, setWfeedback] = useState("");
  const [dfeedback, setDfeedback] = useState("");

  const submittedData = {
    teamName: "hackathon_team_name",
    ideaTitle: "idea_title",
    ideaDescription: "idea description",
    ideaSolution: "solution",
    pptURL: "https://www.africau.edu/images/default/sample.pdf",
    pdfUrl: "https://www.africau.edu/images/default/sample.pdf",
    gitHubURL:
      "https://github.com/play-with-docker/play-with-kubernetes.github.io",
    idea: {
      title: "",
    },
    implementation: {
      description: "",
    },
  };
  const [data, setData] = useState(submittedData);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8087/api/implementations/" + `${param.id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, 'Access-Control-Allow-Origin' : '*',
  'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    }).then((res) => {
      console.log("data",res.data);
      setData(res.data);
      setLoader(false);
    });
  }, []);

  const handleRatingChange1 = (value) => {
    setRating1(value);
  };
  const handleRatingChange2 = (value) => {
    setRating2(value);
  };
  const handleRatingChange3 = (value) => {
    setRating3(value);
  };

  const renderRatingStars1 = () => {
    const stars = [];
    for (let i = 1; i <= 10; i++) {
      stars.push(
        <button
          key={i}
          className={`star ${i === rating1 ? "filled" : ""} mx-1 p-1 px-3`}
          onClick={() => handleRatingChange1(i)}
        >
          {i}
        </button>
      );
    }
    return stars;
  };
  const renderRatingStars2 = () => {
    const stars = [];
    for (let i = 1; i <= 10; i++) {
      stars.push(
        <button
          key={i}
          className={`star ${i === rating2 ? "filled" : ""} mx-1 p-1 px-3`}
          onClick={() => handleRatingChange2(i)}
        >
          {i}
        </button>
      );
    }
    return stars;
  };
  const renderRatingStars3 = () => {
    const stars = [];
    for (let i = 1; i <= 10; i++) {
      stars.push(
        <button
          key={i}
          className={`star ${i === rating3 ? "filled" : ""} mx-1 p-1 px-3`}
          onClick={() => handleRatingChange3(i)}
        >
          {i}
        </button>
      );
    }
    return stars;
  };

  const submit = () => {
    console.log(rating1)
    console.log(rating2)
    console.log(rating3)
    
    axios({
      method: "post",
      url: "http://localhost:8087/api/implementations/addScores",
      data: { 
        implementationId: data.implementation.implementationId,
        technicalProficiencyScore:rating1 ,
        creativityAndInnovationScore:rating2,
        presentationAndCommunicationScore:rating3,
        strengthFeedback:sfeedback,
        improvementAreaFeedback:wfeedback,
        developmentRecommendationsFeedback:dfeedback
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, 'Access-Control-Allow-Origin' : '*',
  'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    }).then((res) => {
      console.log(res.data);
      alert.setMessage("Project Evaluated");
      alert.setAlertStatus("success")
      alert.setShow(true);
      navigate("/JudgeProjectList");
    });
  };

  return (
    <div className="p-1" style={{ height: "150vh",background:"#e2eaf9" }}>
      {loader ? (
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="  mt-4">
          <div className="w-75 mx-auto  container">
          <div className="">
            <div className="h3 text-center mb-5">{data.teamName}</div>
         
            <div className="my-2 fw-semibold h5  d-flex ">
              <div className="">Idea Title - </div>
              <div className="ms-4">{data.idea.title}</div>
            </div>
            <div className="my-2 fw-semibold h5 d-flex ">
            <p className=" ">Idea Summary - </p>
            <div className="ms-4">{data.idea.summary}</div>
            </div>
            {/* display your project field component */}
          </div>
          <SubmittedDetails
            user="Panelist"
            teamName={data.teamName}
            ideaTitle={data.ideaTitle}
            documentation={data.implementation.description}
            pptUrl={data.implementation.pptURL}
            pdfUrl={data.pdfUrl}
            GitRepoUrl={data.implementation.gitHubURL}
          />
           </div>

          {/* scale */}
          <div className="mx-auto">
          <div className="row mb-3">
          <div className=" h5 text-center d-flex justify-content-center align-items-center col-3"><b>Criteria</b></div>
          <div className="text-center h5  col-7"><b>Rating</b></div>
          <div className="text-center h5 d-flex justify-content-center align-items-center  col-2" >
           <b> Score</b>
          </div>
          </div>
          <div className="row mb-3">
          <div className=" h5 text-center d-flex justify-content-center align-items-center col-3">Technical Proficiency</div>
          <div className="text-center  col-7">{renderRatingStars1()}</div>
          <div className="text-center h5 d-flex justify-content-center align-items-center  col-2" >
             {rating1}
          </div>
          </div>
          <div className="row mb-3">
          <div className=" h5 text-center d-flex justify-content-center align-items-center col-3">Creativity and Innovation</div>
          <div className="text-center  col-7">{renderRatingStars2()}</div>
          <div className="text-center h5 d-flex justify-content-center align-items-center  col-2" >
             {rating2}
          </div>
          </div>
          <div className="row">
          <div className=" h5 text-center d-flex justify-content-center align-items-center col-3">Presentation and Communication</div>
          <div className="text-center  col-7">{renderRatingStars3()}</div>
          <div className="text-center h5 d-flex justify-content-center align-items-center  col-2" >
             {rating3}
          </div>
         </div>
          <div className="text-center">
            <button
              className="text-center btn submit-btn fw-semibold text-white py-2 px-5 mb-4 mt-3"
              data-bs-target="#judgeFeedback"
              data-bs-toggle="modal"
              
            >
              Rate
            </button>
            </div>
            </div>

            <div class="modal fade" id="judgeFeedback" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Feedback</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
  <div class="row mb-3">
    <label for="sfeedback" class="col-sm-3 col-form-label">Strength</label>
    <div class="col-sm-9">
      <textarea type="text" onChange={(e)=>setSfeedback(e.target.value)} class="form-control" id="sfeedback"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="wfeedback" class="col-sm-3 col-form-label">Improvement Area</label>
    <div class="col-sm-9">
      <textarea type="text" onChange={(e)=>setWfeedback(e.target.value)} class="form-control" id="wfeedback"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="dfeefback" class="col-sm-3 col-form-label">Development Recomendations</label>
    <div class="col-sm-9">
      <textarea type="text" onChange={(e)=>setDfeedback(e.target.value)} class="form-control" id="dfeefback"/>
    </div>
  </div>
</form>
      </div>
      <div class="d-flex justify-content-center mb-3">
        <button onClick={submit} data-bs-dismiss="modal" type="button" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>
         
        </div>
      )}
    </div>
  );
};

export default JudgeReview;
