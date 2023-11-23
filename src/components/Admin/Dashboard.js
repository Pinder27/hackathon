import React from 'react'

function Dashboard({ideas,judges,panelists}) {
  return (
    <div>
      <div className='mt-5 p-4 px-5  mx-5 ' style={{background:"#9AD0C2",borderRadius:5}}>
        <div className='d-flex justify-content-between'>
        <div className=''>Total Ideas</div>
         <div className=''>Total Judges</div>
         <div className=''>Total Panelist</div>
        </div>
        <div className='d-flex justify-content-between mx-4'>
        <div className=''>{ideas}</div>
         <div className='me-4'>{judges}</div>
         <div className='me-2'>{panelists}</div>
        </div>
      </div>
      <div className='mt-5 p-3  mx-5' style={{background:"#9AD0C2",borderRadius:5,height:"40vh"}}>
        <div className='text-center'>Latest Activity</div>
        <div style={{height:"30vh",overflowY: 'auto'}}>
        <ul className='mt-3' style={{width:"100%"}}>
            <li>
                <div className='d-flex '>
                       <div className=''>Hackathon Begins</div>
                       <div className='ms-auto me-3 text-end opacity-50'>18-Nov 11:48 pm</div>
                </div>
            </li>
            <li>
                <div className='d-flex '>
                       <div className=''>Hackathon Begins</div>
                       <div className='ms-auto me-3 text-end opacity-50'>18-Nov 11:48 pm</div>
                </div>
            </li>
            <li>
                <div className='d-flex '>
                       <div className=''>Hackathon Begins</div>
                       <div className='ms-auto me-3 text-end opacity-50'>18-Nov 11:48 pm</div>
                </div>
            </li>
            <li>
                <div className='d-flex '>
                       <div className=''>Hackathon Begins</div>
                       <div className='ms-auto me-3 text-end opacity-50'>18-Nov 11:48 pm</div>
                </div>
            </li>
            <li>
                <div className='d-flex '>
                       <div className=''>Hackathon Begins</div>
                       <div className='ms-auto me-3 text-end opacity-50'>18-Nov 11:48 pm</div>
                </div>
            </li>
            <li>
                <div className='d-flex '>
                       <div className=''>Hackathon Begins</div>
                       <div className='ms-auto me-3 text-end opacity-50'>18-Nov 11:48 pm</div>
                </div>
            </li>
            <li>
                <div className='d-flex '>
                       <div className=''>Hackathon Begins</div>
                       <div className='ms-auto me-3 text-end opacity-50'>18-Nov 11:48 pm</div>
                </div>
            </li>
            <li>
                <div className='d-flex '>
                       <div className=''>Hackathon Begins</div>
                       <div className='ms-auto me-3 text-end opacity-50'>18-Nov 11:48 pm</div>
                </div>
            </li>
            <li>
                <div className='d-flex '>
                       <div className=''>Hackathon Begins</div>
                       <div className='ms-auto me-3 text-end opacity-50'>18-Nov 11:48 pm</div>
                </div>
            </li>
            <li>
                <div className='d-flex '>
                       <div className=''>Hackathon Begins</div>
                       <div className='ms-auto me-3 text-end opacity-50'>18-Nov 11:48 pm</div>
                </div>
            </li>
           
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
