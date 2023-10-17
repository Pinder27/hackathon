import React from 'react'
import documentIcon from '../assests/images/document.svg'
import { Link } from 'react-router-dom'

const SubmittedDetails = ({user, teamName, ideaTitle, ideaSolution, pptUrl, pdfUrl, GitRepoUrl}) => {
  return (
    <div className='mb-5 d-flex flex-column'>
   {user=="user" &&<p className='h5 ms-auto'>Your Project</p>}
             {user=="user" && <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className='btn text-white  ms-auto px-4 mt-3' style={{backgroundColor: "#ef4815", boxShadow:"0px 0px 8px 1px rgba(0, 0, 0, 0.2)"}}>Edit</button>}
              <p className='h4 mx-auto'>{ideaTitle}</p>
          <div style={{ backgroundColor: "#f8f9fa" }} className='p-4'>
            <div className="d-flex justify-content-between align-items-center mb-4">
              
            </div>
            <table style={{ backgroundColor: "#f8f9fa00", width: "100%" }} className='table-row-gape mb-4'>
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
                  <td className='fw-semibold mb-3' >Github Repository:-</td>
                  <td><input type='text'
                    className='no-border p-1 py-1'
                    style={{ backgroundColor: "rgb(233 233 233)", width: "75%" }}
                    value={GitRepoUrl}
                  /></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Edit</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
      <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">ppt</label>
    <div class="col-sm-10">
      <input type="file" class="form-control" id="inputEmail3"/>
    </div>
  </div>
      <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Documentation</label>
    <div class="col-sm-10">
      <input type="file" class="form-control" id="inputEmail3"/>
    </div>
  </div>
      <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Github-repo</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputEmail3"/>
    </div>
  </div>
  </form>
      </div>
      <div class="modal-footer">
        
        <button type="button" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>
          </div>
  )
}

export default SubmittedDetails
