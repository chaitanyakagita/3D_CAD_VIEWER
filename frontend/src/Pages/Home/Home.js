import React from "react";
import "./Home.css";

const Home = () => {
  const handleGetStarted = () => {
    window.location.href = "/upload"; 
  };

  const handleLearnMore = () => {
    window.location.href = "/convert"; 
  };

  return (
    <div className="home-container">
      <div className="floating-cube cube-1"></div>
      <div className="floating-cube cube-2"></div>
      <div className="floating-cube cube-3"></div>
      
      <div className="overlay">
        <div className="content-wrapper">
          <h2 className="subtitle">Welcome to</h2>
          <h1 className="title">3D CAD Viewer</h1>
          <p className="description">
            Experience the future of 3D modeling. 
            Upload and view your 3D models with ease and precision. 
          </p>
          <div className="button-container">
            <button className="cta-button" onClick={handleGetStarted}>
              Upload File
            </button>
            <button className="secondary-button" onClick={handleLearnMore}>
              Convert File
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;