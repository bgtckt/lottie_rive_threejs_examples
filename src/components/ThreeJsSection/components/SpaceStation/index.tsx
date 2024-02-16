import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {
  Group,
  Object3DEventMap,
} from "three";
import { MeshNodes } from "../../types";

const SpaceStation = () => {
  const groupRef = useRef<Group<Object3DEventMap> | null>(null);
  const { nodes, materials } = useGLTF("/spaceStation.gltf");

  const meshNodes: MeshNodes = nodes;

  useFrame(() => {
    if (groupRef.current) {
      return (groupRef.current.rotation.y -= 0.005);
    }
    return null;
  });

  return (
    <group ref={groupRef} dispose={null} position={[-3, 4, 0]}>
      <group scale={0.005}>
        <mesh
          geometry={meshNodes.SupportStructure_Beam1_SpaceStation_Parts_0.geometry}
          material={materials.SpaceStation_Parts}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          geometry={meshNodes.SpaceStationCore_SpaceStation_Core_0.geometry}
          material={materials.SpaceStation_Core}
        />
        <mesh
          geometry={meshNodes.TurbineShielding_SpaceStation_Core_0.geometry}
          material={materials.SpaceStation_Core}
        />
        <mesh
          geometry={
            meshNodes.SpaceStationCore_InnerTurbineWings_SpaceStation_Core_0
              .geometry
          }
          material={materials.SpaceStation_Core}
          position={[0, -0.945, 0]}
          rotation={[-Math.PI, 0.025, -Math.PI]}
        />
        <mesh
          geometry={
            meshNodes.SpaceStationCore_OuterTurbineWings_SpaceStation_Core_0
              .geometry
          }
          material={materials.SpaceStation_Core}
          position={[0, -0.317, 0]}
          rotation={[-Math.PI, 1.558, -Math.PI]}
        />
        <mesh
          geometry={meshNodes.SupportStructure_Beam4_SpaceStation_Parts_0.geometry}
          material={materials.SpaceStation_Parts}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          geometry={meshNodes.SupportStructure_Beam3_SpaceStation_Parts_0.geometry}
          material={materials.SpaceStation_Parts}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          geometry={meshNodes.SupportStructure_Beam2_SpaceStation_Parts_0.geometry}
          material={materials.SpaceStation_Parts}
        />
        <mesh
          geometry={meshNodes.SpaceStationParts_1_SpaceStation_Parts_0.geometry}
          material={materials.SpaceStation_Parts}
        />
        <mesh
          geometry={meshNodes.SurfaceBraces_Short1_2_SpaceStation_Parts_0.geometry}
          material={materials.SpaceStation_Parts}
          position={[0, 0, -134.703]}
          rotation={[0, 0, -0.325]}
        />
        <mesh
          geometry={meshNodes.SurfaceBraces_Short4_2_SpaceStation_Parts_0.geometry}
          material={materials.SpaceStation_Parts}
          position={[134.703, 0, 0]}
          rotation={[0.325, -Math.PI / 2, 0]}
        />
        <mesh
          geometry={meshNodes.SurfaceBraces_Short3_2_SpaceStation_Parts_0.geometry}
          material={materials.SpaceStation_Parts}
          position={[0, 0, 134.703]}
          rotation={[-Math.PI, 0, 2.817]}
        />
        <mesh
          geometry={meshNodes.SurfaceBraces_Short2_2_SpaceStation_Parts_0.geometry}
          material={materials.SpaceStation_Parts}
          position={[-134.703, 0, 0]}
          rotation={[-0.325, 1.571, 0]}
        />
        <mesh
          geometry={meshNodes.SurfaceBraces_Long4_2_SpaceStation_Parts_0.geometry}
          material={materials.SpaceStation_Parts}
          position={[134.703, 0, 0]}
          rotation={[0.325, -Math.PI / 2, 0]}
        />
        <mesh
          geometry={meshNodes.SurfaceBraces_Short4_4_SpaceStation_Parts_0.geometry}
          material={materials.SpaceStation_Parts}
          position={[134.703, 0, 0]}
          rotation={[0.325, -Math.PI / 2, 0]}
        />
        <mesh
          geometry={meshNodes.SurfaceBraces_Short4_1_SpaceStation_Parts_0.geometry}
          material={materials.SpaceStation_Parts}
          position={[134.703, 0, 0]}
          rotation={[0.325, -Math.PI / 2, 0]}
        />
        <mesh
          geometry={meshNodes.SurfaceBraces_Long4_1_SpaceStation_Parts_0.geometry}
          material={materials.SpaceStation_Parts}
          position={[134.703, 0, 0]}
          rotation={[0.325, -Math.PI / 2, 0]}
        />
        <mesh
          geometry={meshNodes.SurfaceBraces_Short4_3_SpaceStation_Parts_0.geometry}
          material={materials.SpaceStation_Parts}
          position={[134.703, 0, 0]}
          rotation={[0.325, -Math.PI / 2, 0]}
        />
        <mesh
          geometry={meshNodes.SurfaceBraces_Long1_2_SpaceStation_Parts_0.geometry}
          material={materials.SpaceStation_Parts}
          position={[0, 0, -134.703]}
          rotation={[0, 0, -0.325]}
        />
        <mesh
          geometry={meshNodes.SurfaceBraces_Short1_4_SpaceStation_Parts_0.geometry}
          material={materials.SpaceStation_Parts}
          position={[0, 0, -134.703]}
          rotation={[0, 0, -0.325]}
        />
        <mesh
          geometry={meshNodes.SurfaceBraces_Short1_1_SpaceStation_Parts_0.geometry}
          material={materials.SpaceStation_Parts}
          position={[0, 0, -134.703]}
          rotation={[0, 0, -0.325]}
        />
        <mesh
          geometry={meshNodes.SurfaceBraces_Long1_1_SpaceStation_Parts_0.geometry}
          material={materials.SpaceStation_Parts}
          position={[0, 0, -134.703]}
          rotation={[0, 0, -0.325]}
        />
        <mesh
          geometry={meshNodes.SurfaceBraces_Short1_3_SpaceStation_Parts_0.geometry}
          material={materials.SpaceStation_Parts}
          position={[0, 0, -134.703]}
          rotation={[0, 0, -0.325]}
        />
        <mesh
          geometry={meshNodes.SurfaceBraces_Long3_2_SpaceStation_Parts_0.geometry}
          material={materials.SpaceStation_Parts}
          position={[0, 0, 134.703]}
          rotation={[-Math.PI, 0, 2.817]}
        />
        <mesh
          geometry={meshNodes.SurfaceBraces_Short3_4_SpaceStation_Parts_0.geometry}
          material={materials.SpaceStation_Parts}
          position={[0, 0, 134.703]}
          rotation={[-Math.PI, 0, 2.817]}
        />
        <mesh
          geometry={meshNodes.SurfaceBraces_Short3_1_SpaceStation_Parts_0.geometry}
          material={materials.SpaceStation_Parts}
          position={[0, 0, 134.703]}
          rotation={[-Math.PI, 0, 2.817]}
        />
        <mesh
          geometry={meshNodes.SurfaceBraces_Long3_1_SpaceStation_Parts_0.geometry}
          material={materials.SpaceStation_Parts}
          position={[0, 0, 134.703]}
          rotation={[-Math.PI, 0, 2.817]}
        />
        <mesh
          geometry={meshNodes.SurfaceBraces_Short3_3_SpaceStation_Parts_0.geometry}
          material={materials.SpaceStation_Parts}
          position={[0, 0, 134.703]}
          rotation={[-Math.PI, 0, 2.817]}
        />
        <mesh
          geometry={meshNodes.SurfaceBraces_Long2_2_SpaceStation_Parts_0.geometry}
          material={materials.SpaceStation_Parts}
          position={[-134.703, 0, 0]}
          rotation={[-0.325, 1.571, 0]}
        />
        <mesh
          geometry={meshNodes.SurfaceBraces_Short2_4_SpaceStation_Parts_0.geometry}
          material={materials.SpaceStation_Parts}
          position={[-134.703, 0, 0]}
          rotation={[-0.325, 1.571, 0]}
        />
        <mesh
          geometry={meshNodes.SurfaceBraces_Short2_1_SpaceStation_Parts_0.geometry}
          material={materials.SpaceStation_Parts}
          position={[-134.703, 0, 0]}
          rotation={[-0.325, 1.571, 0]}
        />
        <mesh
          geometry={meshNodes.SurfaceBraces_Long2_1_SpaceStation_Parts_0.geometry}
          material={materials.SpaceStation_Parts}
          position={[-134.703, 0, 0]}
          rotation={[-0.325, 1.571, 0]}
        />
        <mesh
          geometry={meshNodes.SurfaceBraces_Short2_3_SpaceStation_Parts_0.geometry}
          material={materials.SpaceStation_Parts}
          position={[-134.703, 0, 0]}
          rotation={[-0.325, 1.571, 0]}
        />
      </group>
    </group>
  );
};

export default SpaceStation;

useGLTF.preload("/spaceStation.gltf");
