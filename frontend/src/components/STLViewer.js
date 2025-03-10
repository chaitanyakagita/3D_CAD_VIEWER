import React, { useEffect, useRef } from "react";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";

const STLViewer = ({ fileUrl }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!fileUrl || !mountRef.current) return;

    const mount = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 50);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Light setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    let mesh;

    // Load STL or OBJ file
    if (fileUrl.toLowerCase().endsWith(".stl")) {
      const loader = new STLLoader();
      loader.load(fileUrl, (geometry) => {
        const material = new THREE.MeshStandardMaterial({ color: 0x0077ff, metalness: 0.5, roughness: 0.2 });
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        centerModel(geometry, mesh);
      });
    } else if (fileUrl.toLowerCase().endsWith(".obj")) {
      const loader = new OBJLoader();
      loader.load(fileUrl, (object) => {
        mesh = object;
        mesh.traverse((child) => {
          if (child.isMesh) {
            child.material = new THREE.MeshStandardMaterial({ color: 0x0077ff, metalness: 0.5, roughness: 0.2 });
          }
        });
        scene.add(mesh);
      });
    }

    // Center model function
    const centerModel = (geometry, model) => {
      const center = new THREE.Vector3();
      geometry.computeBoundingBox();
      geometry.boundingBox.getCenter(center);
      model.position.sub(center);
    };

    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function
    return () => {
      if (mount) {
        mount.innerHTML = ""; //Clear previous rendering
      }
      renderer.dispose();
    };
  }, [fileUrl]);

  return <div ref={mountRef} style={{ width: "100%", height: "93vh" }} />;
};

export default STLViewer;



