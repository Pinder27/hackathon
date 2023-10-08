import React from 'react'
import { useState } from 'react'
import '../assests/css/TeamDetail.css'

import removeIcon from '../assests/images/remove-icon.svg'

const TeamDetail = () => {
    const [formFields, setFormFields] = useState([
        {name:'',age:''}
    ]);
    const [teamName, setTeamName] =useState("");

    //to handle input fields
    const handleFormChange =(e, index)=>{
        let data = [...formFields];
        data[index][e.target.name] = e.target.value;
        setFormFields(data);
    }

    const submit = (e) =>{
        e.preventDefault();

      // Check if teamName is empty
    if (teamName.trim() === '') {
        alert('Team Name cannot be empty');
        return;  // Prevent form submission
    }

    // Check if any participant name or email is empty
    const isEmptyField = formFields.some(form => form.name.trim() === '' || form.email.trim() === '');
    if (isEmptyField) {
        alert('Participant name and email cannot be empty');
        return;  // Prevent form submission
    }




        console.log(teamName);
        console.log(formFields);

    }

    const addFields = () =>{
      if (formFields.length < 4) {
     const newFormFields = [...formFields, { name: '', email: '' }];
     setFormFields(newFormFields);
      }
      else{
        alert("You can add a maximum of 4 participants.");
      }
    }

    const removeFields =(index) =>{
        let data = [...formFields];
        data.splice(index,1);
        setFormFields(data);
    }
  return (
    <div className='team-detail-container'>
     <h1 className="text-center mb-5">Team Details</h1> 
      <h3><label className='d-block'>Team Name</label></h3>
        <input  className='mb-5' onChange={e => setTeamName(e.target.value)}/>
        
     <div className='participant-detail-container'>
       <form onSubmit={submit}>
        {
        formFields.map((form, index) => {
            return (
            
                <div key={index} className='participant-detail'>
                  <h5> Participant {index+1} </h5>   
                    <div>
                    <input name='name' 
                    type='text' 
                    onChange={e => handleFormChange(e, index)} 
                    value={form.name}
                    placeholder='name'
                    />
                    <input name='email'
                     type='email'
                     onChange={e => handleFormChange(e, index)}
                     value={form.email}
                     placeholder='email'
                     />
                     <img src={removeIcon}
                      className='d-inline mx-2' 
                      onClick={() => removeFields(index)} 
                      style={{width:"10px"}} 
                      role='button' 
                      alt="remove-icon" />
                     </div>
                     
                     {/* <Button className='btn btn-sm btn-danger mb-3' onClick={() => removeFields(index)}>Remove</Button> */}
                </div>
            )
        }
        )
       }
       </form>
       <button className='btn btn-primary btn-sm add-btn mb-3 ' onClick={addFields}>+ Add more</button>
     </div>
     <div className='text-center'>
     <button className='btn btn-primary submit-btn btn-block text-center' onClick={submit}>Submit</button>
     </div>
    </div>
  )
}

export default TeamDetail