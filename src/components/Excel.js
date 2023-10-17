import React, { useState } from 'react';


function ExcelUploadForm() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('excelFile', file);

    try {
      // Send the file to your server for processing and database insertion
      // You'll need to implement the server-side logic to handle the file and database insertion.
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Upload Excel File</label>
        <input type="file" accept=".xlsx" onChange={handleFileChange} />
      </div>
      <button  type="submit">
        Upload
      </button>
    </form>
  );
}

export default ExcelUploadForm;
