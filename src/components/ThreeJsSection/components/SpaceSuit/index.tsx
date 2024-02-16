import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {
  BufferGeometry,
  Group,
  NormalBufferAttributes,
  Object3D,
  Object3DEventMap,
  Skeleton
} from "three";

type MeshNodesType = {
  [name: string]: Object3D<Object3DEventMap> &
  {
    geometry?: BufferGeometry<NormalBufferAttributes>,
    skeleton?: Skeleton
  };
};

const SpaceSuit = () => {
  const meshRef = useRef<Group<Object3DEventMap> | null>(null);
  const { nodes, materials } = useGLTF("/spaceSuit.gltf");

  const MeshNodes: MeshNodesType = nodes;

  useFrame(() => {
    if (meshRef.current) {
      return (meshRef.current.rotation.y -= 0.02);
    }
    return null;
  });

  return (
    <group dispose={null} ref={meshRef}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.913}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={MeshNodes._rootJoint} />
          <skinnedMesh
            geometry={MeshNodes.Object_6.geometry}
            material={materials.SuitMat}
            skeleton={MeshNodes.Object_6.skeleton}
          />
          <skinnedMesh
            geometry={MeshNodes.Object_7.geometry}
            material={materials.BackpackMat}
            skeleton={MeshNodes.Object_7.skeleton}
          />
          <skinnedMesh
            geometry={MeshNodes.Object_8.geometry}
            material={materials.HelmetMat}
            skeleton={MeshNodes.Object_8.skeleton}
          />
        </group>
      </group>
    </group>
  );
};

export default SpaceSuit;

useGLTF.preload("/spaceSuit.gltf");
