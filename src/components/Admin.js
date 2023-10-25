import axios from "axios";
import ExcelUploadForm from "./Excel";
import { useState } from "react";

export default function Admin() {

  const [email,setEmail] = useState("");
  const [value, setValue] = useState("");
  function HandleAdd(e){
    e.preventDefault();
    axios({
      method:"put",
      url:"https://3alj5tgxd8.execute-api.us-east-1.amazonaws.com/dev/admin/updateRole",
      data:{
        userEmail: email,
        role: value
      },
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      }}
    ).then((res)=>{
      console.log(res);
      alert(res.data);
      setEmail("");
      setValue("")
    })
  }
  return (
    <div className=" d-flex">
      <div className="col-4 d-flex align-items-center flex-column" style={{ backgroundColor: "#1E0156",height:"600px" }}>
        
        <div className="text-white text-center mt-5 h3">Admin Dashboard</div>
        <div className="text-white text-center mt-auto mb-5 btn  col-3" style={{border :"solid 1px white"}}>Log Out</div>
        
      </div>
      <div className="col-8">
        <div class=" d-flex justify-content-center">
          <a
            class="btn btn-primary m-3"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"

          >
            Add member
          </a>
          <button
            class="btn btn-primary m-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample2"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Add excel file
          </button>
          <button
            class="btn btn-primary m-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample3"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Add Event
          </button>
        </div>
        <div class="collapse" id="collapseExample2">
          <div class="card card-body m-5">
            <ExcelUploadForm />
          </div>
        </div>
        <div class="collapse" id="collapseExample3">
          <div class="card card-body m-5">
          <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Event name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Event Start date</label>
    <input type="date" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Event End date</label>
    <input type="date" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">Add Event</button>
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
