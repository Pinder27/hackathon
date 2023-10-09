import React from 'react'
import '../assests/css/CompletedHackathon.css'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const HackathonList = () => {
  const prevHack =[
    {
      teamName:'T1',
      ideaTitle:'idea1',
      ideaURL:"/url"
    },
    {
      teamName:'T2',
      ideaTitle:'idea2',
      ideaURL:"/url"
    },
    {
      teamName:'T3',
      ideaTitle:'idea3',
      ideaURL:"/url"
    },
    {
      teamName:'T4',
      ideaTitle:'idea4',
      ideaURL:"/url"
    },
    {
      teamName:'T5',
      ideaTitle:'idea5',
      ideaURL:"/url"
    },
    {
      teamName:'T6',
      ideaTitle:'idea6',
      ideaURL:"/url"
    }
  ];

  return (
    <>
    <Navbar />
    <div className='mx-5'>
      {/* name of user will be displayed here */}
      <h2 style={{marginBottom:"50px"}}>Anuj</h2>  

      <h4>Your Hackathons</h4>
      {
       prevHack.length == 0 ?
       (
          <h4>You did not participated in any hackathon yet.</h4>
       ):(
        prevHack.map((detail, index) => (
          <div key={index} className='row-with-shadow-flex'>
            <span>{detail.teamName}</span>
            <span>{detail.ideaTitle}</span> 
            <button>
              <span>
                <Link to={detail.ideaURL} className='click-to-view-btn'>Click to View</Link>
              </span>
            </button>
          </div>
        ))
        )
       
      }
    </div>
    </>
  )
}

export default HackathonList
