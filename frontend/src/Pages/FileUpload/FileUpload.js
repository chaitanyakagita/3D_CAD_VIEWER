import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./FileUpload.css";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      processFile(selectedFile);
    }
  };

  const processFile = (selectedFile) => {
    setFile(selectedFile);
    setFileName(selectedFile.name);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://127.0.0.1:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const fileUrl = response.data.file_url;
      navigate(`/viewer?file=${encodeURIComponent(fileUrl)}`);
    } catch (error) {
      console.error("Upload error:", error);
      alert("Error uploading file!");
    } finally {
      setUploading(false);
    }
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="upload-page">
      <div className="floating-cube cube-1"></div>
      <div className="floating-cube cube-2"></div>
      
      <div className="upload-container">
        <h1 className="upload-title">Upload 3D Model</h1>
        <p className="upload-description">
          Upload your .STL or .OBJ files to view them in our 3D viewer
        </p>
        
        <div 
          className={`drop-zone ${dragActive ? 'active' : ''} ${file ? 'has-file' : ''}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="drop-zone-content">
            <div className="upload-icon">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8L12 4L8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 4V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 16V20H4V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="drop-zone-text">
              {!file && <p>Drag and drop your file here</p>}
              {!file && <p className="small">or</p>}
              <div className="file-input">
                <input 
                  type="file" 
                  id="file" 
                  onChange={handleFileChange} 
                  accept=".stl,.obj" 
                />
                <label htmlFor="file" className="file-label">
                  {file ? fileName : "Browse Files"}
                </label>
              </div>
              {file && (
                <p className="file-selected">
                  {fileName}
                  <button 
                    className="clear-file" 
                    onClick={() => {
                      setFile(null);
                      setFileName("");
                    }}
                  >
                    ✕
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
        
        <div className="button-container">
          <button 
            className="upload-btn" 
            onClick={handleUpload} 
            disabled={uploading || !file}
          >
            {uploading ? (
              <>
                <span className="spinner"></span> 
                <span>Uploading...</span>
              </>
            ) : (
              "Upload & View"
            )}
          </button>
          <button className="back-btn" onClick={handleGoBack}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;


