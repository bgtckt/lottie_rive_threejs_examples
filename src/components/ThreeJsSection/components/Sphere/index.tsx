import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { MeshStructure } from "../../types";

import texture from "/rock_texture.jpg";

const Sphere = () => {
  const meshRef = useRef<MeshStructure | null>(null);
  const textureMap = useLoader(TextureLoader, texture);

  useFrame(() => {
    if (meshRef.current) {
      return (meshRef.current.rotation.y += 0.003);
    }
    return null;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -2]}>
      <sphereGeometry args={[2, 256, 256]} />
      <meshStandardMaterial map={textureMap} />
    </mesh>
  );
}

export default Sphere;