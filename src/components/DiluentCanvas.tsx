"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import Loader from "./DiluentLoader";
import DiluentMesh from "./DiluentMesh";



const DiluentCanvas = () => {
  return (
    <Canvas
      className="z-10"
      frameloop="always"
      camera={{ position: [0.78, 0, 0] }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <DiluentMesh />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default DiluentCanvas;
