import React from 'react'
import Navbar from './Navbar';
import '../assests/css/IdeaDescription.css'

const IdeaDescription = () => {
    return (
        <>
          <Navbar />
          <div className='idea-description-container'>
            
            <div className='idea-detail mx-auto'>
            <h2 className='text-center mt-4'>Describe your Idea</h2>
                <p className='mb-0'>Idea Name</p>
                <input className='mb-3'/>
                <p className='mb-0'>Describe Your Idea</p>
                <textarea rows="7" cols="67" className='mb-3 mt-0'/>
                <p className='mb-0'>What Problem does idea aim to solve?</p>
                <textarea rows="7" cols="67" className='mb-3 mt-0'/>

                <p className='mb-0'>Upload Documentation</p>
                <input type='file'/>
                
                <button className='btn btn-primary submit-btn btn-lg btn-block d-block mt-3' >Submit</button>
              
            </div>
        </div> 
        </>
    )
}

export default IdeaDescription
