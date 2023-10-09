import React from 'react'
import { useState } from 'react';
import documentIcon from '../assests/images/document.svg'
import { Link } from 'react-router-dom'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneIcon from '@mui/icons-material/Done';

const SubmittedDetails = ({ user, teamName, ideaTitle, ideaSolution, pptUrl, pdfUrl, GitRepoUrl }) => {
  const [valueToCopy] = useState(GitRepoUrl);
  const [showTick, setShowTick] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(valueToCopy);
    setShowTick(true);

    // Hide the tick mark after 2 seconds
    setTimeout(() => {
      setShowTick(false);
    }, 2000);
  };


  return (
    <div>
      <p className='mt-5 fw-semibold' style={{ fontSize: "18px" }}>Your Project</p>
      <div style={{ backgroundColor: "#f8f9fa" }} className='px-5 py-3'>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <p className='h6 mx-auto'>{ideaTitle}</p>
          {user === "Participant" &&
            <button className='btn text-white submit-btn'>Edit</button>
          }
        </div>
        <table style={{ backgroundColor: "#f8f9fa", width: "100%" }} className='table-row-gape'>
          <tbody >
            <tr>
              <td className='fw-semibold'>PPT:-</td>
              <td>
                <Link to={pptUrl}
                  target='_blank'
                  className='link-to-text'
                >
                  <img src={documentIcon}
                    style={{ width: "25px" }}
                    className='mx-1'
                  />
                  Click here to view the PPT
                </Link>
              </td>
            </tr>
            <tr>
              <td className='fw-semibold' >Documentation:-</td>
              <td>
                <a href={pdfUrl}
                  download="Addresources.js"
                  target='_blank'
                  className='link-to-text'
                >
                  <img src={documentIcon}
                    style={{ width: "25px" }}
                    className='mx-1'
                  />
                  Click here to view the documentation
                </a>
              </td>
            </tr>
            <tr>
              <td className='fw-semibold' >Github Repository:-</td>
              <td>
                <input type='text'
                  className='no-border p-1 py-1'
                  style={{ backgroundColor: "#e0dede", width: "75%" }}
                  value={GitRepoUrl}
                />
                {/*copy to clipboard and show tick when user click on this */}
                {
                  showTick ?
                    (
                    <DoneIcon className='mx-2' style={{marginBottom:"7px"}}/>
                    ) : (
                      <ContentCopyIcon onClick={handleCopyToClipboard} className='mx-2 copy-btn' alt="Copy to Clipboard" />
                    )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SubmittedDetails
