import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sphere from "./components/Sphere";
import SpaceSuit from "./components/SpaceSuit";

import "./index.module.css";

type Model = "planet" | "spaceSuit";

const ThreeJsSection = () => {
  const [activeModel, setActiveModel] = useState<Model>("planet");

  return (
    <div>
      <button type="button" onClick={() => setActiveModel("planet")}>Planet</button>
      <button type="button" onClick={() => setActiveModel("spaceSuit")}>Space Suit</button>
      <Canvas
        camera={{
          fov: 90,
          position: [0, 0, 3],
        }}
      >
        <directionalLight position={[1, 1, 1]} intensity={0.8} />
        {activeModel === "planet" && (
          <>
            <ambientLight intensity={0.25} color="lightGreen" />
            <Sphere />
          </>
        )}

        {activeModel === "spaceSuit" && (
          <>
            <ambientLight intensity={5} />
            <SpaceSuit />
          </>
        )}
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default ThreeJsSection;
