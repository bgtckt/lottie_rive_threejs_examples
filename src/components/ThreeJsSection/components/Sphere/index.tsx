import { useRef } from "react";
import { BufferGeometry, Material, Mesh, NormalBufferAttributes, Object3DEventMap } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";

import texture from "/rock_texture.jpg";

type MeshStructureType = Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>;

const Sphere = () => {
  const meshRef = useRef<MeshStructureType | null>(null);
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