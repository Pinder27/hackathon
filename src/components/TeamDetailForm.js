import React from "react";
import { useState } from "react";
import "../assests/css/TeamDetail.css";

import removeIcon from "../assests/images/remove-icon.svg";
import axios from "axios";
import { useNavigate } from "react-router";


const TeamDetail = ({alert}) => {
  
  const navigate = useNavigate();
  
  const [formFields, setFormFields] = useState([{ name: "", email: "" }]);
  const [teamName, setTeamName] = useState("");
  const [leaderName, setLeaderName] = useState("");
  const [leaderEmail, setLeaderEmail] = useState("");
  

  //to handle input fields
  const handleEmailChange = (e, index) => {
    const { value } = e.target;
    let data = [...formFields];
    data[index].email = value;
    setFormFields(data);
    console.log(data[index].email);
  };
  const handleNameChange = (e, index) => {
    const { value } = e.target;
    let data = [...formFields];
    data[index].name = value;
    setFormFields(data);
    console.log(data[index].name);
  };

  

  const submit = (e) => {
    e.preventDefault();

    // Check if teamName is empty
    if (teamName.trim() === "") {
      alert.setMessage("Team Name cannot be empty");
      alert.setAlertStatus("error")
      alert.setShow(true)
      return; // Prevent form submission
    }

   
    
    var data = {
      teamName: teamName,
      leaderEmail:leaderEmail,
      leaderName:leaderName,
      member1Name:(formFields.length>=1)?(formFields[0].name):(""),
      member1Email:(formFields.length>=1)?(formFields[0].email):(""),
      member2Name:(formFields.length>=2)?(formFields[1].name):(""),
      member2Email:(formFields.length>=2)?(formFields[1].email):(""),
      member3Name:(formFields.length>=3)?(formFields[2].name):(""),
      member3Email:(formFields.length>=3)?(formFields[2].email):(""),
    }
   
    
    axios({
      method: "post",
      url: "http://ec2-65-0-108-48.ap-south-1.compute.amazonaws.com:8087/TeamRegistration",
      data: data,
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res)=>{
      console.log(res)
      alert.setMessage("Team Submitted, Please fill your Idea details!");
      alert.setAlertStatus("success")
      alert.setShow(true);
           navigate("/ideadescription");
    }).catch((e)=>{
      console.log(e);
      
    });

    console.log(teamName);
    console.log(formFields);
  };

  const addFields = () => {
    if (formFields.length < 3) {
      const newFormFields = [...formFields, { name: "", email: "" }];
      setFormFields(newFormFields);
    } else {
      alert.setMessage("You can add a maximum of 4 participants");
      alert.setAlertStatus("error")
      alert.setShow(true)
    }
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };
  return (
    <div className="d-flex p-5" style={{backgroundColor:"#e2eaf9"}} >
      
      <div className="d-flex flex-column justify-content-center team-detail-container">
        <h3 className="text-center">Team Details</h3>
        <div className="p-2 m-3" style={{ background: "#f8f8f800", borderRadius:"5px" }}>
          <div  style={{marginLeft:"15%",marginTop:"5%"}}>
            <h5>
              <label>Team Name</label>
            </h5>
            <input
            className="ms-1"
              
              onChange={(e) => setTeamName(e.target.value)}
            />
          </div>

          <div className="participant-detail" style={{marginLeft:"15%"}}>
                   
                    <div>
                      <h5>Leader</h5>
                      <input
                        name="name"
                        type="text"
                        onChange={(e) => setLeaderName(e.target.value)}
                        
                        placeholder="Leader name"
                        
                      />
                      <input
                        name="email"
                        type="text"
                        onChange={(e) => setLeaderEmail(e.target.value)}
                        
                        placeholder="leader email"
                        
                      />
                    </div>
                    </div>

          <div className="participant-detail-container">
            <form onSubmit={submit}>
              {formFields.map((form, index) => {
                return (
                  <div key={index} className="participant-detail" style={{marginLeft:"15%"}}>
                    <h5> Participant {index + 1} </h5>
                    <div>
                      <input
                        name="name"
                        type="text"
                        onChange={(e) => handleNameChange(e, index)}
                        value={form.name}
                        placeholder="name"
                        
                      />
                      <input
                        name="email"
                        type="text"
                        onChange={(e) => handleEmailChange(e, index)}
                        value={form.email}
                        placeholder="email"
                        
                      />
                      <img
                        src={removeIcon}
                        className="d-inline mx-2"
                        onClick={() => removeFields(index)}
                        style={{ width: "10px" }}
                        role="button"
                        alt="remove-icon"
                      />
                    </div>

                    {/* <Button className='btn btn-sm btn-danger mb-3' onClick={() => removeFields(index)}>Remove</Button> */}
                  </div>
                );
              })}
            </form>

            <button
              className="btn btn-primary btn-sm add-btn mb-3 "
              style={{marginLeft:"15%"}}
              onClick={addFields}
            >
              + Add more
            </button>
          </div>
          <div className="text-center">
            <button
              className="btn submit-btn text-white text-center mb-5"
             style={{boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)"}}
              onClick={submit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;
