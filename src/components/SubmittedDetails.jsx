import React from 'react'
import documentIcon from '../assests/images/document.svg'
import { Link } from 'react-router-dom'

const SubmittedDetails = ({user, teamName, ideaTitle, ideaSolution, pptUrl, pdfUrl, GitRepoUrl}) => {
  return (
    <div>
    <p className='fw-semibold mt-5 '>Your Project</p>
          <div style={{ backgroundColor: "#f8f9fa" }} className='px-5 py-3'>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <p className='h6 mx-auto'>{ideaTitle}</p>
              { user === "Participant" &&
              <button className='btn btn-primary submit-btn'>Edit</button>
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
                      style={{width:"25px"}}
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
                      style={{width:"25px"}}
                      className='mx-1'
                     />
                     Click here to view the documentation
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className='fw-semibold' >Github Repository:-</td>
                  <td><input type='text'
                    className='no-border p-1 py-1'
                    style={{ backgroundColor: "#9a8585", width: "75%" }}
                    value={GitRepoUrl}
                  /></td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
  )
}

export default SubmittedDetails
