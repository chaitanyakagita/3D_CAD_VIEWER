import React, { useState } from "react";
import axios from "axios";
import "./Convert.css";

const BACKEND_URL = "http://127.0.0.1:5000";

const Convert = () => {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState("");
  const [convertedUrl, setConvertedUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    if (event.target.files[0]) {
      setFile(event.target.files[0]);
      setFileName(event.target.files[0].name);
      setFileUrl("");
      setConvertedUrl("");
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    try {
      const response = await axios.post(`${BACKEND_URL}/upload`, formData);
      setFileUrl(response.data.file_url);
    } catch (error) {
      alert("Upload failed!");
    } finally {
      setLoading(false);
    }
  };

  const handleConvert = async () => {
    if (!fileUrl) {
      alert("Please upload a file first!");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${BACKEND_URL}/convert`, { file_url: fileUrl });
      setConvertedUrl(response.data.converted_url);
    } catch (error) {
      alert("Conversion failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="convert-page">
      <div className="floating-cube cube-1"></div>
      <div className="floating-cube cube-2"></div>
      
      <div className="convert-container">
        <h1>3D Format Converter</h1>
        <p>Convert STL to OBJ format</p>
        
        <div className="upload-area">
          <input 
            type="file" 
            id="file-input" 
            onChange={handleFileChange} 
            accept=".stl" 
          />
          <label htmlFor="file-input" className="file-label">
            {file ? fileName : "Select STL File"}
          </label>
          
          {file && (
            <button 
              className="clear-button"
              onClick={() => {
                setFile(null);
                setFileName("");
                setFileUrl("");
                setConvertedUrl("");
              }}
            >
              Clear
            </button>
          )}
        </div>
        
        <div className="button-group">
          <button 
            className="action-button"
            onClick={handleUpload} 
            disabled={loading || !file}
          >
            {loading && !fileUrl ? "Uploading..." : "Upload"}
          </button>
          
          <button 
            className="action-button"
            onClick={handleConvert} 
            disabled={loading || !fileUrl}
          >
            {loading && fileUrl ? "Converting..." : "Convert"}
          </button>
        </div>
        
        {convertedUrl && (
          <div className="download-section">
            <a 
              href={convertedUrl} 
              download 
              className="download-link"
            >
              <button className="download-button">
                Download OBJ File
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Convert;

