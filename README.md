# 3D CAD Viewer

## Overview

The **3D CAD Viewer** is a web-based application that enables users to **upload, view, and manipulate 3D models** in formats like **STL** and **OBJ**. It provides an interactive interface with features such as ***rotation, zoom, and pan controls*** for enhanced model visualization. Additionally, users can convert their model from ***.STL to .OBJ*** and can download the converted file.


## Technologies Used

- **Frontend**: React.js
- **Backend**: Flask (Python)
- **Styling**: CSS
- **3D Rendering**: Three.js


## Features

- **File Uploading** : Supports STL and OBJ 3D model uploads
- **3D Model Rendering** : Uses **Three.js** for displaying the uploaded models.
- **Interactive Controls** : Rotate, zoom, and pan models using mouse interactions.
- **Viewer Page** : The model opens in a seperate page after uploading.
- **File Exporting** : Converts model from **.STL to .OBJ** and we can download the converted file.

## Demo Link
https://drive.google.com/file/d/1eTcXn__iXmUNuKeTqPS1NbzG8-SlvKmp/view?usp=sharing


 ## How to Run <br/>
 
 ### Installations <br/>

   <h4>1. Clone the repository:</h4>
   <pre><code> git clone https://github.com/chaitanyakagita/3D_CAD_VIEWER.git </code></pre>

   <h4>2. Navigate to the main project directory:</h4>
   <pre><code> cd 3d_cad_viewer </code></pre>

   <h4>3. Install Dependencies:</h4>
   <h5>Frontend</h5>
   <pre><code> cd frontend </code></pre>
   <pre><code> npm install </code></pre>
   <h5>Backend</h5>
   <pre><code> cd backend </code></pre>  
   <pre><code> pip install -r requirements.txt </code></pre>           

   <h4>4. Start the Development Server</h4>
   <h5>Frontend</h5>
   <pre><code> npm start </code></pre>
   <h5>Backend</h5>
   <pre><code> flask run</code></pre>           

   <h4>5. Open your Browser and Visit:</h4>
   <pre><code> http://localhost:3000 </code></pre>
   

## Output Images <br/>

### Home Page
![Image](https://github.com/user-attachments/assets/499c4b91-09c0-4012-ab6b-9017c62cb34b)

### Upload Page
![Image](https://github.com/user-attachments/assets/9733b087-5956-4b54-9bb8-6fab3272a480)

### Viewer Page (3D Model View)
![Image](https://github.com/user-attachments/assets/92806f7f-79a9-46c5-8f3e-37d0dee1720c)

### Convert Page
![Image](https://github.com/user-attachments/assets/e172e943-cfc5-47a7-a3a3-23ed05617980)
