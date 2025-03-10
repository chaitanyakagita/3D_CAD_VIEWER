import React from "react";
import "./About.css";

const About = () => {
  const handleGetStarted = () => {
    window.location.href = "/upload";
  };
  
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About 3D CAD Viewer</h1>
        <div className="divider"></div>
        <p className="intro-text">
          The 3D CAD Viewer is a web-based tool that allows users to upload, view, and interact with 3D models in STL and OBJ formats.
        </p>
      </div>

      <div className="section">
        <h2>What I Have Done</h2>
        <ul className="feature-list">
          <li className="feature-item">
            <span className="check-icon">✓</span>
            Built a  <strong> 3D Model Viewer</strong> that allows users to upload and visualize 3D models in STL and OBJ formats.
          </li>
          <li className="feature-item">
            <span className="check-icon">✓</span>
            Implemented <strong>file upload functionality</strong> to allow users to upload their 3D models (.stl / .obj).
          </li>
          <li className="feature-item">
            <span className="check-icon">✓</span>
            Integrated <strong>three.js</strong> to render and interact with the 3D models using smooth rotation and zooming.
          </li>
          <li className="feature-item">
            <span className="check-icon">✓</span>
            Developed a clean <strong>React-based frontend</strong> with React Router for navigation between different pages.
          </li>
        </ul>
      </div>

      <div className="section">
        <h2>Technologies Used</h2>
        <ul className="feature-list">
          <li className="feature-item">
            <span className="tech-icon">✓</span>
            <strong>React.js </strong> – Frontend framework for building the user interface.
          </li>
          <li className="feature-item">
            <span className="tech-icon">✓</span>
            <strong>three.js </strong> – 3D graphics library used to render and interact with STL/OBJ files.
          </li>
          <li className="feature-item">
            <span className="tech-icon">✓</span>
            <strong>Axios </strong> – For handling HTTP requests to upload files to the backend.
          </li>
          <li className="feature-item">
            <span className="tech-icon">✓</span>
            <strong>React Router </strong> – For navigation between different pages.
          </li>
          <li className="feature-item">
            <span className="tech-icon">✓</span>
            <strong>Python (Flask) </strong> – Backend for handling file uploads.
          </li>
        </ul>
      </div>

      <div className="section">
        <h2>How to Use</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Navigate to the Upload Page</h3>
              <p>Go to the <strong>Upload</strong> section in the navigation bar.</p>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Upload Your 3D Model</h3>
              <p>Click on "Choose a file" and select an <strong>STL</strong> or <strong>OBJ</strong> file from your system.</p>
              <p>Click <strong>Upload</strong> to send the file to the server.</p>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>View the Model</h3>
              <p>Once uploaded successfully, the model will be rendered on the screen.</p>
              <p>Use your <strong>mouse</strong> to rotate, zoom, and pan the model.</p>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Explore More</h3>
              <p>Check out the <strong>Convert</strong> page to Convert STL to OBJ format and to download the model in that format.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="button-container">
            <button className="cta-button" onClick={handleGetStarted}>
              Upload File
            </button>
      </div>
    </div>
  );
};

export default About;