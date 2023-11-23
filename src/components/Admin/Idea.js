import React, { useState } from "react";
import axios from "axios";
function Idea({ ideasList, alert }) {
    const [PanelistEmail,setPanelistEmail] = useState("")
  function handleAutoAssignIdeas(e) {
    e.preventDefault();
    axios({
      method: "get",
      url: "http://localhost:8087/admin/assignIdeasToPanelists",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      alert.setMessage(res.data);
      alert.setAlertStatus("success");
      alert.setShow(true);
    });
  }

  function handleAssinIdea(e,id){
    e.preventDefault();
    axios({
      method: "put",
      url: "http://localhost:8087/admin/AssignIndividualIdea",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      params:{
        ideaId:id,
        panelistEmail:PanelistEmail
      }
    }).then((res) => {
      alert.setMessage(res.data);
      alert.setAlertStatus("success");
      alert.setShow(true);
     setPanelistEmail("")
    }).catch((e)=>{
        alert.setMessage(e.response.data);
      alert.setAlertStatus("error");
      alert.setShow(true);
    });
  }
  return (
    <div>
      <div className="d-flex px-5 mt-4">
        <div className="d-flex align-self-center">{`total ideas - ${ideasList.length}`}</div>
        <button
          onClick={handleAutoAssignIdeas}
          className="btn ms-auto text-white"
          style={{ background: "#2D9596" }}
        >
          Auto Assign Ideas
        </button>
      </div>
      <div
        className="p-4 mx-5 mt-4"
        style={{ background: "#9AD0C2", height: "65vh", borderRadius: 5 }}
      >
        <div className="row mx-auto" style={{ width: "100%" }}>
          <div className="col-2">S.no</div>
          <div className="col-4">Idea title</div>
          <div className="col-4">Team Name</div>
        </div>
        <div style={{ overflowY: "auto", width: "100%", height: "52vh" }}>
          {ideasList.map((idea, index) => {
            return (
              <div
                className="row mx-auto p-2 mb-2"
                style={{
                  width: "100%",
                  background: "#ECF4D6",
                  borderRadius: 5,
                }}
              >
                <div className="col-2">{index + 1}</div>
                <div className="col-4">{idea.idea.title}</div>
                <div className="col-4 ps-4">{idea.teamName}</div>
                <button
                  className="col-2 text-white btn btn-sm"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapseExample${idea.idea.id}`}
                  style={{
                    background: "#657873",
                    borderRadius: 5,
                  }}
                  
                >
                  Assign Idea
                </button>
                <div class="collapse" id={`collapseExample${idea.idea.id}`}>
                  <div className="d-flex mt-2">
    <label for="exampleInputEmail1" class="form-label me-2">Panelist Email - </label>
    <input onChange={(e)=>setPanelistEmail(e.target.value)} value={PanelistEmail} type="email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <button onClick={(e)=>handleAssinIdea(e,idea.idea.id)}  className="ms-2 btn btn-sm text-white d-flex align-self-center" style={{background:"#89909e",borderRadius:5}}>Assign</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Idea;
