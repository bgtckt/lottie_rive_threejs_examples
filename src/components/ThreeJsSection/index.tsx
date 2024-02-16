import { useState } from "react";
import { DoubleSide } from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Droid from "./components/Droid";
import Harvester from "./components/Harvester";
import Sphere from "./components/Sphere";
import SpaceSuit from "./components/SpaceSuit";
import SpaceStation from "./components/SpaceStation";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";

import soilTexture from "/soil_texture.jpg";

import "./index.module.css";

type Model = "planet" | "spaceScene";

const ThreeJsSection = () => {
  const [activeModel, setActiveModel] = useState<Model>("planet");

  const groundTextureMap = useLoader(TextureLoader, soilTexture);

  return (
    <div>
      <button type="button" onClick={() => setActiveModel("planet")}>Planet</button>
      <button type="button" onClick={() => setActiveModel("spaceScene")}>Space scene</button>
      <Canvas
        camera={{
          fov: 90,
          position: [0, 1, 3],
        }}
      >
        {activeModel === "planet" && (
          <>
            <directionalLight position={[1, 1, 1]} intensity={0.8} />
            <ambientLight intensity={0.25} color="lightGreen" />
            <Sphere />
          </>
        )}

        {activeModel === "spaceScene" && (
          <>
            <directionalLight position={[1, 10, 1]} intensity={3} />
            <ambientLight intensity={5} />
            <SpaceStation />
            <Harvester />
            <Droid />
            <SpaceSuit />
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
              <planeGeometry args={[10, 10]} />
              <meshStandardMaterial map={groundTextureMap} side={DoubleSide} />
            </mesh>
          </>
        )}
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default ThreeJsSection;
