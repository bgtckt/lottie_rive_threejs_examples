import { useGLTF } from "@react-three/drei";
import { MeshNodes } from "../../types";

const SpaceSuit = () => {
  const { nodes, materials } = useGLTF("/spaceSuit.gltf");

  const meshNodes: MeshNodes = nodes;

  return (
    <group dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.15}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={meshNodes._rootJoint} />
          <skinnedMesh
            geometry={meshNodes.Object_6.geometry}
            material={materials.SuitMat}
            skeleton={meshNodes.Object_6.skeleton}
          />
          <skinnedMesh
            geometry={meshNodes.Object_7.geometry}
            material={materials.BackpackMat}
            skeleton={meshNodes.Object_7.skeleton}
          />
          <skinnedMesh
            geometry={meshNodes.Object_8.geometry}
            material={materials.HelmetMat}
            skeleton={meshNodes.Object_8.skeleton}
          />
        </group>
      </group>
    </group>
  );
};

export default SpaceSuit;

useGLTF.preload("/spaceSuit.gltf");
