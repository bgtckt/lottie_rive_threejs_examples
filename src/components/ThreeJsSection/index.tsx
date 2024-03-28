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

import skyTexture from "/night_sky_texture.jpg";
import soilTexture from "/soil_texture.jpg";

import "./index.module.css";

type Model = "planet" | "spaceScene";

const Sky = () => {
  const skyTextureMap = useLoader(TextureLoader, skyTexture);

  return (
    <mesh rotation={[4.84, 0, 0]} position={[0, -4, 0]}>
      <sphereGeometry args={[15]} />
      <meshStandardMaterial map={skyTextureMap} side={DoubleSide} />
    </mesh>
  )
}

const Ground = () => {
  const groundTextureMap = useLoader(TextureLoader, soilTexture);

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <circleGeometry args={[14]} />
      <meshStandardMaterial map={groundTextureMap} side={DoubleSide} />
    </mesh>
  )
}

const ThreeJsSection = () => {
  const [activeModel, setActiveModel] = useState<Model>("planet");

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <button type="button" onClick={() => setActiveModel("planet")}>Planet</button>
        <button type="button" onClick={() => setActiveModel("spaceScene")}>Space scene</button>
      </div>
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
            <directionalLight position={[1, 5, 1]} intensity={3} />
            <hemisphereLight intensity={2} />
            <SpaceStation />
            <Harvester />
            <Droid />
            <SpaceSuit />
            <Sky />
            <Ground />
          </>
        )}
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default ThreeJsSection;
