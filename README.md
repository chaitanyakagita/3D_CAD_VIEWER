# 3D CAD Viewer

## Overview

The **3D CAD Viewer** is a web-based application that enables users to **upload, view, and manipulate 3D models** in formats like **STL** and **OBJ**.  
It provides an **interactive interface** for handling 3D models, including rotation, zoom, and pan controls.  


## Features

- **File Upload**: Upload STL or OBJ 3D models for rendering.
- **3D Model Rendering**: Uses **Three.js** for displaying the uploaded models.
- **Interactive Controls**: Rotate, zoom, and pan models using mouse interactions.
- **Separate Viewer Page**: The model opens in a new `/viewer` route after uploading.
- **File Export **: Converts file from **.STL to .OBJ**.
- **Responsive Design**: Optimized for both desktop and mobile devices.


## Tech Stack

- **Frontend**: React.js
- **Backend**: Flask (Python)
- **3D Rendering**: Three.js
- **File Handling**: Multer (for uploads)
- **Styling**: CSS


 ## Installations <br/>
   
   Clone the repository:   ``` git clone https://github.com/chaitanyakagita/3D-CAD-Viewer.git ``` <br/>
   Navigate to the main project directory:   ``` cd 3d-cad-viewer ``` <br/>
   Navigate to the each directories separately:   ``` cd frontend, cd backend ``` <br/>
   Install the dependencies separately:  Inside Frontend: ``` npm install ``` and Inside backend: ```pip install -r requirements.txt``` <br/>
   Start the development server:   go to ```cd frontend``` and run ``` npm start ``` <br/>
                                   for backend: go to ```cd backend``` and run ```flask run```
   Open your browser and visit:   ``` http://localhost:5173  ``` <br/>
