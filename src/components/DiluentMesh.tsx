import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Mesh } from 'three';
import React, { useRef } from "react";

const DiluentMesh = () => {
  const diluent = useGLTF("./diluent/microscope-2.gltf");
  const diluentRef = useRef<Mesh>(null);

    useFrame(() => {
      if(diluentRef.current) diluentRef.current.rotation.y += 0.005;
    });

  return (
    <>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <mesh ref={diluentRef}>
        <primitive object={diluent.scene} scale={2} position={[0, -0.3, 0]} />
      </mesh>
    </>
  );
};

export default DiluentMesh;
