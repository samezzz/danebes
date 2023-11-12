'use client';

import {Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import Loader from './diluent-loader';



const Diluent= () => {
  const diluent = useGLTF('./diluent/sample-scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} 
      groundColor="black" />
      <pointLight intensity={0.25} />
      <primitive 
        object={diluent.scene}
        scale={0.5}
        position={[0, 0, 0]}
      />
    </mesh>
  )
}


const DiluentCanvas = () => {
  return (
    <Canvas
    frameloop='demand'
    shadows
    camera={{ position: [0.5, 0, 0]}}
    gl={{preserveDrawingBuffer: true}}
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
  )
}

export default DiluentCanvas;