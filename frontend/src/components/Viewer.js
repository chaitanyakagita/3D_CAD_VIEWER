import React from "react";
import { useLocation } from "react-router-dom";
import STLViewer from "../components/STLViewer";

const Viewer = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const fileUrl = queryParams.get("file");

  if (!fileUrl) {
    return <h2>No file selected!</h2>;
  }

  return (
    <div style={{ width: "100vw", height: "93vh" }}>
      <STLViewer fileUrl={fileUrl} />
    </div>
  );
};

export default Viewer;
