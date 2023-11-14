"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "./DiluentLoader";

const Diluent = () => {
  const diluent = useGLTF("./diluent/sample-scene.gltf");
  return (
    <mesh>
      <primitive object={diluent.scene} scale={1} position={[0, 0, 0]} />
    </mesh>
  );
};

const DiluentCanvas = () => {
  return (
    <Canvas
      className="z-10"
      shadows
      frameloop="demand"
      camera={{ position: [0.78, 0, 0] }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Diluent />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default DiluentCanvas;
