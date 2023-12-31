import React, { useState } from "react";
import axios from "axios";
function Idea({ ideasList, alert }) {
    const [PanelistEmail,setPanelistEmail] = useState("")
    const [filteredList,setFilteredList] = useState(ideasList);
  function handleAutoAssignIdeas(e) {
    e.preventDefault();
    axios({
      method: "get",
      url: "https://lb0y9x24b9.execute-api.us-east-1.amazonaws.com/admin/assignIdeasToPanelists",
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
      url: "https://lb0y9x24b9.execute-api.us-east-1.amazonaws.com/admin/AssignIndividualIdea",
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
  function handleFilter(e){
    
    if(e.target.value=="") setFilteredList(ideasList)
    const filtered = ideasList.filter((panelist)=>panelist.idea.title.toLowerCase().includes(e.target.value))
    setFilteredList(filtered)
  }
  return (
    <div>
      <div className="d-flex px-5 mt-4">
        <div className="d-flex align-self-center">{`Total Ideas - ${ideasList.length}`}</div>
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
        style={{ background: "#9AD0C2", height: "70vh", borderRadius: 5 }}
      >
        <div className="row mx-auto mb-3 p-1" style={{ width: "100%",background:"#ffffff54",borderRadius:5 }}>
          <div className="col-2 fw-semibold pt-1">S.No</div>
          <div className="col-4 fw-semibold pt-1">Idea title</div>
          <div className="col-3 fw-semibold pt-1">Team Name</div>
          <div className="input-group input-group-sm col-3 d-flex flex-end" style={{width:"15vw"}}>
        <input placeholder="search" type="search" onChange={(e)=>handleFilter(e)} className="form-control" />
      </div>
        </div>
        <div style={{ overflowY: "auto", width: "100%", height: "58vh" }}>
          {filteredList.map((idea, index) => {
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
