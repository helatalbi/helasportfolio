import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const GalaxyScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Initialisation de la scène
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.0015);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 5, 15);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.2;

    // Création de la galaxie
    const galaxyParameters = {
      count: 100000,
      arms: 4,
      radius: 10,
      spin: 2,
      randomness: 0.3,
      randomnessPower: 3,
      insideColor: new THREE.Color(0xff66ff),
      outsideColor: new THREE.Color(0x66ffff),
    };

    const positions = new Float32Array(galaxyParameters.count * 3);
    const colors = new Float32Array(galaxyParameters.count * 3);

    for (let i = 0; i < galaxyParameters.count; i++) {
      const i3 = i * 3;
      const radius = Math.pow(Math.random(), galaxyParameters.randomnessPower) * galaxyParameters.radius;
      const branchAngle = ((i % galaxyParameters.arms) / galaxyParameters.arms) * Math.PI * 2;
      const spinAngle = radius * galaxyParameters.spin;
      const randomX = (Math.random() - 0.5) * galaxyParameters.randomness * radius;
      const randomY = (Math.random() - 0.5) * galaxyParameters.randomness * radius * 0.5;
      const randomZ = (Math.random() - 0.5) * galaxyParameters.randomness * radius;
      const totalAngle = branchAngle + spinAngle;

      positions[i3] = Math.cos(totalAngle) * radius + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(totalAngle) * radius + randomZ;

      const mixedColor = galaxyParameters.insideColor.clone();
      mixedColor.lerp(galaxyParameters.outsideColor, radius / galaxyParameters.radius);
      mixedColor.multiplyScalar(0.7 + 0.3 * Math.random());

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    const galaxyGeometry = new THREE.BufferGeometry();
    galaxyGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    galaxyGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const galaxyMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const galaxy = new THREE.Points(galaxyGeometry, galaxyMaterial);
    scene.add(galaxy);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      galaxy.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -2, // Envoie en arrière-plan
      }}
    />
  );
};

export default GalaxyScene;
