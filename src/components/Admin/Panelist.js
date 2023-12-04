import React, { useState,useRef } from "react";
import DropDown from "../../assests/images/drop-down-4.png"
import Bell from "../../assests/images/bell-3.png"
import axios from "axios"

function Panelist({panelistList,setPanelistList,alert}) {

  const [ideaList,setIdeaList] = useState([{title:"codeit",teamname:"codebusters"},{title:"codeit",teamname:"codebusters"},{title:"codeit",teamname:"codebusters"},{title:"codeit",teamname:"codebusters"},{title:"codeit",teamname:"codebusters"},{title:"codeit",teamname:"codebusters"},{title:"codeit",teamname:"codebusters"},{title:"codeit",teamname:"codebusters"},{title:"codeit",teamname:"codebusters"}])
  const [ideasAssigned,setIdeasAssigned] = useState();
  const [ideasEvaluated,setIdeasEvaluated] = useState();
  const [currentButtonRef, setCurrentButtonRef] = useState(null);
  const [filteredList,setFilteredList] = useState(panelistList);

  

  // Function to handle button clicks and update the reference
  const handleButtonClick = (ref) => {
    console.log(currentButtonRef)
    if(currentButtonRef!==null){
        // currentButtonRef.current.click();
        console.log("click")
    }
    setCurrentButtonRef(ref);
    // Do something with the button reference
  };

  function handleFilter(e){
    
    if(e.target.value=="") setFilteredList(panelistList)
    const filtered = panelistList.filter((panelist)=>panelist.name.includes(e.target.value))
    setFilteredList(filtered)
  }
     
  function handleSendReminderPanelists(e){
         e.preventDefault();
         axios({
            method:"get",
            url:"https://lb0y9x24b9.execute-api.us-east-1.amazonaws.com/admin/sendReminderToPanelists",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
              }
         }).then((res)=>{

            alert.setMessage(res.data)
            alert.setAlertStatus("success");
            alert.setShow(true)
         })
  }

  function handleRemoveIdeas(e){
    e.preventDefault();
    axios({
       method:"delete",
       url:"https://lb0y9x24b9.execute-api.us-east-1.amazonaws.com/admin/removeAllAssignedIdeas",
       headers: {
           'Authorization': `Bearer ${localStorage.getItem("token")}`,
         }
    }).then((res)=>{

       alert.setMessage(res.data)
       alert.setAlertStatus("success");
       alert.setShow(true)
    })
}

  
 function handleSendReminderIndividualPanelist(e,email){
    e.preventDefault();
    axios({
       method:"get",
       url:"https://lb0y9x24b9.execute-api.us-east-1.amazonaws.com/admin/sendReminderToIndividualPanelist",
       headers: {
           'Authorization': `Bearer ${localStorage.getItem("token")}`,
         },
         params:{
            email:email
         }
    }).then((res)=>{
       console.log(res.data)
       alert.setMessage(res.data)
       alert.setAlertStatus("success");
       alert.setShow(true)
    })
}

function handleGetIdeas(e,id,index){
    
    e.preventDefault();
                  
    
    axios({
        method:"get",
        url:"https://lb0y9x24b9.execute-api.us-east-1.amazonaws.com/admin/getIdeasByPanelistId",
        params:{
            id:id
        },
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
          }
    }).then((res)=>{
        console.log(res.data)
        setIdeaList(res.data);
        let count = 0;
        for(let i=0;i<res.data.length;i++){
            if(res.data[i].status===null) count++;
        }
        setIdeasEvaluated(res.data.length-count);
        setIdeasAssigned(res.data.length)
    })
}
function handleAssignIdeasToOthers(e,email){
    e.preventDefault();
    axios({
        method:"get",
        url:"https://lb0y9x24b9.execute-api.us-east-1.amazonaws.com/admin/assignIdeasToOtherPanelists",
        params:{
            panelistEmail:email
        },
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
          }
    }).then((res)=>{
        console.log("pane",res)
        setIdeaList([]);
       alert.setMessage(res.data);
       alert.setAlertStatus("success");
       alert.setShow(true);
    })
}

function handleRemove(e,email){
       e.preventDefault();
       axios({
        method:"put",
        url:"https://lb0y9x24b9.execute-api.us-east-1.amazonaws.com/admin/removeRolefromUser",
        data:{
            userEmail:email,
            role:"Role_Panelist"
        },
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
          }
    }).then((res)=>{
       alert.setMessage("Panelist Removed");
       alert.setAlertStatus("success");
       alert.setShow(true);
       const panelistRemoved = panelistList.filter((panelist)=>panelist.email!==email)
       setPanelistList(panelistRemoved)
       setFilteredList(panelistRemoved)

    })
}
  return (
    <div>
      <div className="d-flex px-5 mt-4">
        <div className="d-flex align-self-center">{`total Panelist - ${panelistList.length}`}</div>
        <button onClick={handleSendReminderPanelists} className="btn ms-auto" style={{ background: "#EFEDB1" }}>
          Send Reminder
        </button>
        <button onClick={handleRemoveIdeas} className="btn ms-1" style={{ background: "#EFEDB1" }}>
          Remove ideas
        </button>
      </div>
      
      <div
        className="p-4 mx-5 mt-4"
        style={{ background: "#9AD0C2", height: "70vh", borderRadius: 5 }}
      >
        <div className="row mx-auto" style={{ width: "100%" }}>
          <div className="col-2">S.no</div>
          <div className="col-4">Panelist Name</div>
          <div className="col-3 ms-2" >Panelist Email</div>
          <div className="input-group input-group-sm col-3 d-flex flex-end mb-3 " style={{width:"15vw"}}>
        <input placeholder="search" type="search" onChange={(e)=>handleFilter(e)} className="form-control" />
      </div>
        </div>
        <div style={{ overflowY: "auto", width: "100%", height: "58vh" }}>
          {filteredList.map((panelist, index) => {
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
                <div className="col-4">{panelist.name}</div>
                <div className="col-4 ps-4">{panelist.email}</div>
                <div
                  ref = {(btnRef)=>handleButtonClick(btnRef)}
                  className="col-2"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapseWidthExample${index}`}
                  type="button"
                  onClick={(e)=>{
                    
                    handleGetIdeas(e,panelist.id,index)}}
                >
                  <img src={DropDown} height="20px"/>
                </div>
                <div style={{width:"100%"}}>
                  <div
                    class="collapse"
                    id={`collapseWidthExample${index}`}
                  >
                    <div  style={{width:"100%"}} >
                        <div className="row mt-2">
                        <div className="col-3">{`ideas assigned - ${ideasAssigned}`}</div>
                     <div className="col-3">{`ideas evaluated - ${ideasEvaluated}`}</div>
                     <div data-bs-toggle="modal" data-bs-target={`#staticBackdrop${index}`} className="col-3 btn btn-sm text-center" type="button" style={{background:"#fff",borderRadius:5}}>assign to other</div>
                     <div class="modal fade" id={`staticBackdrop${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Assign To Other Panelists </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body d-flex flex-end">
      <button type="button" onClick={(e)=>handleAssignIdeasToOthers(e,panelist.email)} data-bs-dismiss="modal" className="btn btn-primary ms-auto">Assign</button>
      </div>
    </div>
  </div>
</div>
                     <div className="col-1 text-center"  ><img src={Bell} className="ms-2" type="button" onClick={(e)=>handleSendReminderIndividualPanelist(e,panelist.email)} height="20px"/></div>
                     <div className="col-2 text-center d-flex"  ><button  className="btn btn-sm bg-light" data-bs-toggle="modal" data-bs-target={`#staticBackdropRemove${index}`}>Remove</button></div>
                     <div class="modal fade" id={`staticBackdropRemove${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Are you sure to remove this panelist - {panelist.name}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
     
      <div class="modal-footer">
        
        <button type="button" onClick={(e)=>handleRemove(e,panelist.email)} class="btn btn-primary" data-bs-dismiss="modal">Yes</button>
      </div>
    </div>
  </div>
</div>
                        </div>
                        <div className="p-2 mt-2" style={{background:"#f1c9c9",borderRadius:5}}>
                        <div className='row mx-auto mt-2' style={{width:"100%"}}>
              <div className='col-2'>S.no</div>
              <div className='col-4'>Idea title</div>
              <div className='col-4'>Team Name</div>
              <div className='col-2'>Status</div>
           </div>
                        <div style={{overflowY:"auto",height:"30vh"}}>
        
                           {ideaList.length==0?(<div>This Panelist has no ideas assigned</div>):(ideaList.map((idea,index)=>{
                            return(
                                <div className='row mx-auto p-2 mb-2' style={{width:"100%",background:"#86b7feb5",borderRadius:5}}>
                                <div className='col-2'>{index+1}</div>
                                <div className='col-4'>{idea.ideaName}</div>
                                <div className='col-4 ps-4'>{idea.teamName}</div>
                                <div className='col-2' >{idea.status===null?"Pending":idea.status==="approved"?"Approved":"Rejected"}</div>
                          </div>
                            )
                           }))}
                        </div>
                     </div>
                    </div>
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

export default Panelist;
