import React from 'react'
import axios from "axios";
import { useState } from "react";

function Role({alert}) {
    const [email,setEmail] = useState("");
    const [value, setValue] = useState("");

    function HandleAdd(e){
        e.preventDefault();
        axios({
          method:"put",
          url:"https://lb0y9x24b9.execute-api.us-east-1.amazonaws.com/admin/updateRole",
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
        }).catch((e)=>{
          alert.setMessage("Email not found")
          alert.setAlertStatus("error")
          alert.setShow(true)
        })
      }
  return (
    <div className='px-5 mt-5' >
        <div className='p-5' style={{ background: "#9AD0C2", borderRadius: 5 }}>
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
                  placeholder='example@gmail.com'
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
  )
}

export default Role
