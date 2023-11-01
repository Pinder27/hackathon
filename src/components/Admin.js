import axios from "axios";
import ExcelUploadForm from "./Excel";
import { useState } from "react";
import {useNavigate} from "react-router-dom"

export default function Admin({setUser,alert}) {

  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [value, setValue] = useState("");
  const [PanelistList,setPanelistList] = useState([]);
  const [count,setCount] = useState(0);

  function handleReminderToJudges(){
    axios({
      method:"get",
      url:"http://ec2-65-0-108-48.ap-south-1.compute.amazonaws.com:8087/admin/sendReminderToJudges",
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      }}
    ).then((res)=>{
      alert.setMessage("Reminder sent to judges")
      alert.setAlertStatus("success")
      alert.setShow(true)
    })
  }
  function handleReminderToPanelist(){
    axios({
      method:"get",
      url:"http://ec2-65-0-108-48.ap-south-1.compute.amazonaws.com:8087/admin/sendReminderToPanelists",
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      }}
    ).then((res)=>{
      alert.setMessage("Reminder sent to panelists")
      alert.setAlertStatus("success")
      alert.setShow(true)
    })
  }
function handleAssignToOtherPanelist(){
  axios({
    method:"get",
    url:"http://ec2-65-0-108-48.ap-south-1.compute.amazonaws.com:8087/admin/assignIdeasToOtherPanelists",
    params:{
      panelistEmail:email
    },
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
    }}
  ).then((res)=>{
    alert.setMessage("Idea assigned to other panelists")
    alert.setAlertStatus("success")
    alert.setShow(true)
  })
}

  function handlePanelistList(e){
    e.preventDefault();
    axios({
      method:"get",
      url:"http://ec2-65-0-108-48.ap-south-1.compute.amazonaws.com:8087/admin/checkPanelistProgress",
      params:{
        panelistEmail:email
      },
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      }}
    ).then((res)=>{
      console.log(res);
       setPanelistList(res.data);
       var j = 0;
       for(var i=0;i<res.data.length;i++){
        if(res.data[i].status===null){
          j++;
        }
       }
       setCount(j);
    })
  }
  function HandleAdd(e){
    e.preventDefault();
    axios({
      method:"put",
      url:"http://ec2-65-0-108-48.ap-south-1.compute.amazonaws.com:8087/admin/updateRole",
      data:{
        userEmail: email,
        role: value
      },
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      }}
    ).then((res)=>{
      console.log(res);
      alert.setMessage("Role updated")
      alert.setAlertStatus("success")
      alert.setShow(true)
      setEmail("");
      setValue("")
    })
  }

  function HandleAssignIdeas(e){
    e.preventDefault();
    axios({
      method:"get",
      url:"http://ec2-65-0-108-48.ap-south-1.compute.amazonaws.com:8087/admin/assignIdeasToPanelists",
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      }}
    ).then((res)=>{
      console.log(res);
      alert.setMessage("Ideas Assigned")
      alert.setAlertStatus("success")
      alert.setShow(true)
    })
  }
  return (
    <div className=" d-flex">
      <div className="col-4 d-flex align-items-center flex-column" style={{ backgroundColor: "#1E0156",height:"600px" }}>
        
        <div className="text-white text-center mt-5 h3">Admin Dashboard</div>
        <div className="text-white text-center mt-auto mb-5 btn  col-3" onClick={(e)=>{
          setUser(false)
          localStorage.removeItem("token");
          navigate("/")
        }} style={{border :"solid 1px white"}}>Log Out</div>
        
      </div>
      <div className="col-8">
        <div class="">
          <div className="d-flex justify-content-center">
          <a
            class="btn btn-primary m-3"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"

          >
            Update
          </a>
          <button
            class="btn btn-primary m-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample2"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Panelist Progress
          </button>
          <button
            class="btn btn-primary m-3"
            type="button"
            onClick={HandleAssignIdeas}
          >
            Assign Ideas
          </button>
          </div>
          <div className="d-flex justify-content-center">
          <button
            class="btn btn-primary m-3"
            type="button"
            onClick={handleReminderToPanelist}
          >
            Send Reminder to panelist
          </button>
          <button
            class="btn btn-primary m-3"
            type="button"
            onClick={handleReminderToJudges}
          >
            Send Reminder to Judges
          </button>
          </div>
        </div>
        <div class="collapse" id="collapseExample2">
          <div class="card card-body m-5">
          <form>
  <div class="mb-3">
    <label for="exampleInputEmail1"  class="form-label">Email address</label>
    <input type="email" class="form-control" onChange={(e)=>setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <button type="submit" onClick={handlePanelistList} class="btn btn-primary">Submit</button>
  <div>
  <div>{`${count} reviews pending`}</div>
  <button data-bs-toggle="modal" onClick={(e)=>e.preventDefault()} data-bs-target="#assigntootherpanelsit">Assign to another Panelist</button>
  <div class="modal fade" id="assigntootherpanelsit" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div>
        <div class="mb-3">
    <label for="exampleInputEmail123"  class="form-label">Email address</label>
    <input type="email" class="form-control" onChange={(e)=>setEmail(e.target.value)} id="exampleInputEmail123" aria-describedby="emailHelp"/>
  </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" onClick={handleAssignToOtherPanelist} class="btn btn-primary" data-bs-dismiss="modal">Assign</button>
      </div>
    </div>
  </div>
</div>
  </div>
</form>
          </div>
        </div>
      
        <div class="collapse" id="collapseExample">
          <div class="card card-body m-5">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e)=>setEmail(e.target.value)}
                  value = {email}
                />
    
              </div>
              <select value={value} onChange={(e)=>setValue(e.target.value)} class="form-select mb-4" aria-label="Default select example" style={{width:"20%"}}>
  <option selected >Select Role</option>
  <option value="Role_Judge">Judge</option>
  <option value="Role_Panelist">Panelist</option>
  <option value="Role_Admin">Admin</option>
</select>
              <button type="submit" onClick={HandleAdd} class="btn btn-primary">
                Add
              </button>
            </form>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
