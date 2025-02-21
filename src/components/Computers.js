import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";
import "./Computers.css";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
    {/* Light */}
    <hemisphereLight intensity={0.15} groundColor="yellow" />
    <pointLight intensity={1}/>
    <spotLight
      position={[0, 100, 20]}
      angle={0.2}
      penumbra={1}
      intensity={200}
      castShadow
      shadow-mapSize={1024}
    />

    <directionalLight
        position={[0, 50, 50]} // Light from above and slightly in front
        intensity={2} // Moderate intensity to complement the spotLight
        castShadow
    />

    <primitive
      object={computer.scene}
      scale={isMobile ? 0.7 : 0.75}
      position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
    />
  </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Ajout d'un écouteur pour les changements de taille d'écran
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Définir la valeur initiale de l'état `isMobile`
    setIsMobile(mediaQuery.matches);

    // Fonction de rappel pour gérer les changements de la requête média
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Ajouter la fonction de rappel comme écouteur pour les changements de la requête média
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Retirer l'écouteur lorsque le composant est démonté
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="computers-canvas-container">
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        style={{
          width: "100%", // Prend toute la largeur de la fenêtre
          height: "100%", // Prend toute la hauteur de la fenêtre
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
