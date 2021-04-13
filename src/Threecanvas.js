import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import Model from "./Model";
import { OrbitControls } from "@react-three/drei";
export default function Threecanvas() {
  return (
    <Canvas>
      <ambientLight intensity={0.7} />
      <spotLight intensity={0.7} position={[5, 20, 20]} />
      <Suspense fallback={null}>
        <Model>
          <meshStandardMaterial />
        </Model>
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
