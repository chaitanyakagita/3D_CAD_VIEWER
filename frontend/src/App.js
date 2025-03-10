import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import FileUpload from "./Pages/FileUpload/FileUpload";
import Viewer from "./components/Viewer";
import Convert from "./Pages/Convert/Convert";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/upload" element={<FileUpload />} />
        <Route path="/convert" element={<Convert />} />
        <Route path="/viewer" element={<Viewer />} />
      </Routes>
    </Router>
  );
};

export default App;


