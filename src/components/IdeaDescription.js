import React, { useState } from 'react';
import Navbar from './Navbar';
import '../assests/css/IdeaDescription.css';

const IdeaDescription = () => {
    const [formData, setFormData] = useState({
        ideaName: '',
        ideaDescription: '',
        problemDescription: '',
        file: null  // Add a file property to the form data
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData(prevFormData => ({
            ...prevFormData,
            file: file  // Update the file in the form data
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Send the data to the backend using an HTTP request
        const formPayload = new FormData();
        formPayload.append('ideaName', formData.ideaName);
        formPayload.append('ideaDescription', formData.ideaDescription);
        formPayload.append('problemDescription', formData.problemDescription);
        formPayload.append('file', formData.file);  // Append the file to the form data

        // Log the FormData object before sending to the backend
        // console.log('FormData to send:', formPayload);

        // Perform the HTTP request to send the data to the backend
        // Example using fetch:

        // fetch('YOUR_BACKEND_API_ENDPOINT', {
        //     method: 'POST',
        //     body: formPayload,
        //     headers:{
        //    'Content-Type': 'multipart/form-data'
        //     }
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Response from server:', data);
        //     // Handle the response from the server if needed
        // })
        // .catch(error => console.error('Error:', error));
    };

    return (
        <>
            <Navbar />
            <div className='idea-description-container mt-4'>
                <h3 className='text-center mb-4'>Describe your Idea</h3>
                <div className='idea-detail mx-auto border'>
                    <form onSubmit={handleSubmit}>
                    <div className='p-5 mx-5'>
                    <p className='mb-0'>Idea Name</p>
                        <input
                            className='mb-3 w-100 p-2'
                            name='ideaName'
                            value={formData.ideaName}
                            onChange={handleInputChange}
                        />
                        <p className='mb-0'>Describe Your Idea</p>
                        <textarea
                            rows="10"
                            cols="67"
                            className='mb-3 mt-0 p-2'
                            style={{ width: "100%" }}
                            name='ideaDescription'
                            value={formData.ideaDescription}
                            onChange={handleInputChange}
                        />
                        <p className='mb-0'>What Problem does the idea aim to solve?</p>
                        <textarea
                            rows="10"
                            cols="67"
                            className='mb-3 mt-0 p-2'
                            style={{ width: "100%" }}
                            name='problemDescription'
                            value={formData.problemDescription}
                            onChange={handleInputChange}
                        />

                        <p className='mb-0'>Upload Documentation</p>
                  
                        <input
                            type='file'
                            className='py-1 px-3 w-100'
                            onChange={handleFileChange}
                        />
                        <button className='btn submit-btn btn-lg d-block mt-5 text-white' onClick={handleSubmit}>Submit</button>
                    </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default IdeaDescription;
