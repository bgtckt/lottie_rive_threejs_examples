import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Group, Object3DEventMap } from "three";
import { MeshNodes } from "../../types";

const Harvester = () => {
  const groupRef = useRef<Group<Object3DEventMap> | null>(null);
  const { nodes, materials, animations } = useGLTF("/harvester.gltf");
  const { actions } = useAnimations(animations, groupRef);

  const meshNodes: MeshNodes = nodes;

  useEffect(() => {
    actions?.SpaceMinerShowcase?.play();
  }, [actions]);

  return (
    <group ref={groupRef} dispose={null} position={[1.5, 0, 0]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, -2.4]}>
          <group
            name="1e094df4d5da4183a3c4c4a177ac2c7dfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.0005}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Base"
                  position={[0, 1.474, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Base_InorganicBaked_0"
                    geometry={meshNodes.Base_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="HingeSliderTop_LOW"
                  position={[976.821, 748.129, 0]}
                  rotation={[-Math.PI / 2, 0.096, 0]}
                  scale={100}
                >
                  <mesh
                    name="HingeSliderTop_LOW_InorganicBaked_0"
                    geometry={
                      meshNodes.HingeSliderTop_LOW_InorganicBaked_0.geometry
                    }
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="WheelAxles"
                  position={[397.701, 295.589, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="WheelAxles_InorganicBaked_0"
                    geometry={meshNodes.WheelAxles_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="WheelAxleContainers"
                  position={[394.014, 302.537, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="WheelAxleContainers_InorganicBaked_0"
                    geometry={
                      meshNodes.WheelAxleContainers_InorganicBaked_0.geometry
                    }
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="WheelTireTL"
                  position={[397.701, 295.589, 493.14]}
                  rotation={[Math.PI / 2, 1.031, Math.PI]}
                  scale={100}
                >
                  <mesh
                    name="WheelTireTL_InorganicBaked_0"
                    geometry={meshNodes.WheelTireTL_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="WheelTireTR"
                  position={[397.701, 295.589, -493.14]}
                  rotation={[Math.PI / 2, 1.031, -Math.PI]}
                  scale={100}
                >
                  <mesh
                    name="WheelTireTR_InorganicBaked_0"
                    geometry={meshNodes.WheelTireTR_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="WheelTireBR"
                  position={[-474.926, 295.589, -493.14]}
                  rotation={[Math.PI / 2, 1.031, -Math.PI]}
                  scale={100}
                >
                  <mesh
                    name="WheelTireBR_InorganicBaked_0"
                    geometry={meshNodes.WheelTireBR_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="WheelTireBL"
                  position={[-474.926, 295.589, 493.14]}
                  rotation={[Math.PI / 2, 1.031, -Math.PI]}
                  scale={100}
                >
                  <mesh
                    name="WheelTireBL_InorganicBaked_0"
                    geometry={meshNodes.WheelTireBL_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="BaseTopFrame_LOW"
                  position={[0, 0.737, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="BaseTopFrame_LOW_InorganicBaked_0"
                    geometry={meshNodes.BaseTopFrame_LOW_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="BackEngine_LOW"
                  position={[-860.541, 564.297, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[100, 90, 90]}
                >
                  <mesh
                    name="BackEngine_LOW_InorganicBaked_0"
                    geometry={meshNodes.BackEngine_LOW_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="BackExhausts"
                  position={[-941.996, 305.456, -144.717]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="BackExhausts_InorganicBaked_0"
                    geometry={meshNodes.BackExhausts_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="TurbineL"
                  position={[-961.734, 756.81, 489.434]}
                  rotation={[-2.437, -Math.PI / 2, 0]}
                  scale={46.858}
                >
                  <mesh
                    name="TurbineL_InorganicBaked_0"
                    geometry={meshNodes.TurbineL_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="TurbineR"
                  position={[-961.734, 756.81, -489.434]}
                  rotation={[-2.437, -Math.PI / 2, 0]}
                  scale={46.858}
                >
                  <mesh
                    name="TurbineR_InorganicBaked_0"
                    geometry={meshNodes.TurbineR_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="TurbineMiddle"
                  position={[-983.448, 564.297, 0]}
                  rotation={[-2.437, -1.571, 0]}
                  scale={72.7}
                >
                  <mesh
                    name="TurbineMiddle_InorganicBaked_0"
                    geometry={meshNodes.TurbineMiddle_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="PistonUnder"
                  position={[971.768, 526.655, 483.448]}
                  rotation={[Math.PI / 2, -0.834, -Math.PI]}
                  scale={100}
                >
                  <mesh
                    name="PistonUnder_InorganicBaked_0"
                    geometry={meshNodes.PistonUnder_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="PistonTop"
                  position={[928.607, 752.753, 0]}
                  rotation={[-Math.PI / 2, -0.371, 0]}
                  scale={100}
                >
                  <mesh
                    name="PistonTop_InorganicBaked_0"
                    geometry={meshNodes.PistonTop_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="PistonHingeUnder"
                  position={[971.768, 526.655, 483.448]}
                  rotation={[Math.PI / 2, -0.201, Math.PI]}
                  scale={100}
                >
                  <mesh
                    name="PistonHingeUnder_InorganicBaked_0"
                    geometry={meshNodes.PistonHingeUnder_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="PistonHingeTop"
                  position={[928.607, 752.753, 0]}
                  rotation={[-Math.PI / 2, 0.096, 0]}
                  scale={100}
                >
                  <mesh
                    name="PistonHingeTop_InorganicBaked_0"
                    geometry={meshNodes.PistonHingeTop_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="FrontTrayCableBundle_LOW"
                  position={[986.65, 128.042, 450.693]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="FrontTrayCableBundle_LOW_InorganicBaked_0"
                    geometry={
                      meshNodes.FrontTrayCableBundle_LOW_InorganicBaked_0.geometry
                    }
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="FrontArmBase"
                  position={[695.355, 614.626, 492.43]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="FrontArmBase_InorganicBaked_0"
                    geometry={meshNodes.FrontArmBase_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="FrontArm2"
                  position={[829.772, 619.586, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="FrontArm2_InorganicBaked_0"
                    geometry={meshNodes.FrontArm2_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="FrontArmBridge_LOW"
                  position={[829.771, 641.898, -30.011]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="FrontArmBridge_LOW_InorganicBaked_0"
                    geometry={
                      meshNodes.FrontArmBridge_LOW_InorganicBaked_0.geometry
                    }
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="HingeSlider1_LOW"
                  position={[979.507, 563.858, 483.448]}
                  rotation={[Math.PI / 2, -0.201, Math.PI]}
                  scale={100}
                >
                  <mesh
                    name="HingeSlider1_LOW_InorganicBaked_0"
                    geometry={meshNodes.HingeSlider1_LOW_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="CutterDrum_LOW"
                  position={[1293.605, 641.898, 0]}
                  rotation={[-Math.PI / 2, 0.51, 0]}
                  scale={100}
                >
                  <mesh
                    name="CutterDrum_LOW_InorganicBaked_0"
                    geometry={meshNodes.CutterDrum_LOW_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="CuttingPeaksAllMerged_LOW"
                  position={[1293.605, 641.898, 0]}
                  rotation={[0, 0, -0.51]}
                  scale={100}
                >
                  <mesh
                    name="CuttingPeaksAllMerged_LOW_InorganicBaked_0"
                    geometry={
                      meshNodes.CuttingPeaksAllMerged_LOW_InorganicBaked_0.geometry
                    }
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="FrontTray_LOW"
                  position={[1068.645, 181.254, 0]}
                  rotation={[-Math.PI / 2, 0.371, 0]}
                  scale={100}
                >
                  <mesh
                    name="FrontTray_LOW_InorganicBaked_0"
                    geometry={meshNodes.FrontTray_LOW_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="FrontTrayMOST_LOW"
                  position={[1289.008, 96.252, 0]}
                  rotation={[-Math.PI / 2, 0.358, 0]}
                  scale={100}
                >
                  <mesh
                    name="FrontTrayMOST_LOW_InorganicBaked_0"
                    geometry={meshNodes.FrontTrayMOST_LOW_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="TrayGrinderL_LOW"
                  position={[1151.404, 169.184, 264.348]}
                  rotation={[-Math.PI / 2, 0.371, 0]}
                  scale={100}
                >
                  <mesh
                    name="TrayGrinderL_LOW_InorganicBaked_0"
                    geometry={meshNodes.TrayGrinderL_LOW_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="FrontTrayGear_LOW"
                  position={[800.235, 220.538, 417.087]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="FrontTrayGear_LOW_InorganicBaked_0"
                    geometry={meshNodes.FrontTrayGear_LOW_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="FrontTraySupport_LOW"
                  position={[800.235, 220.538, 0]}
                  rotation={[-Math.PI / 2, -0.052, 0]}
                  scale={100}
                >
                  <mesh
                    name="FrontTraySupport_LOW_InorganicBaked_0"
                    geometry={
                      meshNodes.FrontTraySupport_LOW_InorganicBaked_0.geometry
                    }
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="FrontMerged_LOW"
                  position={[0, 0.737, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="FrontMerged_LOW_InorganicBaked_0"
                    geometry={meshNodes.FrontMerged_LOW_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="TrayGrinderR_LOW"
                  position={[1151.404, 169.184, -264.348]}
                  rotation={[-Math.PI / 2, 0.371, 0]}
                  scale={100}
                >
                  <mesh
                    name="TrayGrinderR_LOW_InorganicBaked_0"
                    geometry={meshNodes.TrayGrinderR_LOW_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="PipesMerged_LOW"
                  position={[0, 0.737, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="PipesMerged_LOW_InorganicBaked_0"
                    geometry={meshNodes.PipesMerged_LOW_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="SidesMerged"
                  position={[0, 0.737, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="SidesMerged_InorganicBaked_0"
                    geometry={meshNodes.SidesMerged_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="LadderBottom_LOW"
                  position={[-70.932, 390.183, 635.358]}
                  rotation={[-Math.PI / 2, 0.004, 0]}
                  scale={100}
                >
                  <mesh
                    name="LadderBottom_LOW_InorganicBaked_0"
                    geometry={meshNodes.LadderBottom_LOW_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="SideArmJoint2_LOW"
                  position={[255.826, 750.362, 593.141]}
                  rotation={[-Math.PI / 2, -0.033, 0.337]}
                  scale={100}
                >
                  <mesh
                    name="SideArmJoint2_LOW_InorganicBaked_0"
                    geometry={meshNodes.SideArmJoint2_LOW_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="HandRotX_LOW"
                  position={[110.532, 745.619, 762.217]}
                  rotation={[-Math.PI / 2, -0.033, -0.71]}
                  scale={71.278}
                >
                  <mesh
                    name="HandRotX_LOW_InorganicBaked_0"
                    geometry={meshNodes.HandRotX_LOW_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="ArmHingeBase_LOW"
                  position={[573.667, 760.737, 580.187]}
                  rotation={[-Math.PI / 2, -0.033, 0]}
                  scale={100}
                >
                  <mesh
                    name="ArmHingeBase_LOW_InorganicBaked_0"
                    geometry={meshNodes.ArmHingeBase_LOW_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="HandRotZ_LOW"
                  position={[110.532, 745.619, 762.218]}
                  rotation={[-Math.PI / 2, -0.033, -0.71]}
                  scale={115.131}
                >
                  <mesh
                    name="HandRotZ_LOW_InorganicBaked_0"
                    geometry={meshNodes.HandRotZ_LOW_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="HandRotY_LOW"
                  position={[110.532, 745.619, 762.217]}
                  rotation={[-1.171, 0.4, -0.786]}
                  scale={108.149}
                >
                  <mesh
                    name="HandRotY_LOW_InorganicBaked_0"
                    geometry={meshNodes.HandRotY_LOW_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="SideArmHandBase001"
                  position={[123.359, 746.038, 747.291]}
                  rotation={[-1.171, 0.4, -0.786]}
                  scale={100}
                >
                  <mesh
                    name="SideArmHandBase001_InorganicBaked_0"
                    geometry={
                      meshNodes.SideArmHandBase001_InorganicBaked_0.geometry
                    }
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="SideArmFinger1L"
                  position={[113.491, 763.681, 776.232]}
                  rotation={[-1.171, 0.4, -0.786]}
                  scale={100}
                >
                  <mesh
                    name="SideArmFinger1L_InorganicBaked_0"
                    geometry={meshNodes.SideArmFinger1L_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="SideArmJoint1_LOW"
                  position={[493.347, 758.115, 580.187]}
                  rotation={[-Math.PI / 2, -0.033, 0.054]}
                  scale={100}
                >
                  <mesh
                    name="SideArmJoint1_LOW_InorganicBaked_0"
                    geometry={meshNodes.SideArmJoint1_LOW_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="SideArmFinger1U"
                  position={[98.477, 763.191, 793.704]}
                  rotation={[-1.171, 0.4, 0.785]}
                  scale={100}
                >
                  <mesh
                    name="SideArmFinger1U_InorganicBaked_0"
                    geometry={meshNodes.SideArmFinger1U_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="SideArmFinger3L"
                  position={[96.738, 727.203, 760.813]}
                  rotation={[-1.171, 0.4, -0.786]}
                  scale={100}
                >
                  <mesh
                    name="SideArmFinger3L_InorganicBaked_0"
                    geometry={meshNodes.SideArmFinger3L_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="SideArmFinger3U"
                  position={[81.724, 726.714, 778.284]}
                  rotation={[-1.171, 0.4, 0.785]}
                  scale={100}
                >
                  <mesh
                    name="SideArmFinger3U_InorganicBaked_0"
                    geometry={meshNodes.SideArmFinger3U_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="SideArmFinger2L"
                  position={[119.108, 734.067, 780.229]}
                  rotation={[-1.171, 0.4, -0.786]}
                  scale={100}
                >
                  <mesh
                    name="SideArmFinger2L_InorganicBaked_0"
                    geometry={meshNodes.SideArmFinger2L_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="SideArmFinger2U"
                  position={[104.094, 733.577, 797.7]}
                  rotation={[-1.171, 0.4, 0.785]}
                  scale={100}
                >
                  <mesh
                    name="SideArmFinger2U_InorganicBaked_0"
                    geometry={meshNodes.SideArmFinger2U_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="SideArmFinger4L"
                  position={[91.121, 756.817, 756.816]}
                  rotation={[-1.171, 0.4, -0.786]}
                  scale={100}
                >
                  <mesh
                    name="SideArmFinger4L_InorganicBaked_0"
                    geometry={meshNodes.SideArmFinger4L_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="SideArmFinger4U"
                  position={[76.107, 756.327, 774.288]}
                  rotation={[-1.171, 0.4, 0.785]}
                  scale={100}
                >
                  <mesh
                    name="SideArmFinger4U_InorganicBaked_0"
                    geometry={meshNodes.SideArmFinger4U_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="Details"
                  position={[0, 0.737, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Control_GroundLocation"
                  position={[1287.983, 0, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="SpaceMiner_Rig"
                  position={[0, 0.737, 0]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={100}
                >
                  <group name="Object_146">
                    <primitive object={meshNodes._rootJoint} />
                    <skinnedMesh
                      name="Object_149"
                      geometry={meshNodes.Object_149.geometry}
                      material={materials.InorganicBaked}
                      skeleton={meshNodes.Object_149.skeleton}
                    />
                    <skinnedMesh
                      name="Object_151"
                      geometry={meshNodes.Object_151.geometry}
                      material={materials.InorganicBaked}
                      skeleton={meshNodes.Object_151.skeleton}
                    />
                    <skinnedMesh
                      name="Object_153"
                      geometry={meshNodes.Object_153.geometry}
                      material={materials.InorganicBaked}
                      skeleton={meshNodes.Object_153.skeleton}
                    />
                    <skinnedMesh
                      name="Object_205"
                      geometry={meshNodes.Object_205.geometry}
                      material={materials.InorganicBaked}
                      skeleton={meshNodes.Object_205.skeleton}
                    />
                  </group>
                </group>
                <group
                  name="CableBundle_IKTargetL"
                  position={[1195.137, 492.739, 500.082]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="CableBundle_IKTargetR"
                  position={[1202.042, 493.033, -500.206]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="LargeCable_IKTargetL"
                  position={[1043.734, 544.165, 522.382]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[100, 104.459, 100]}
                />
                <group
                  name="LargeCable_IKTargetR"
                  position={[1043.737, 544.165, -522.382]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[100, 104.459, 100]}
                />
                <group
                  name="HydraulicHingeLower"
                  position={[846.731, 413.184, 483.448]}
                  rotation={[-Math.PI / 2, 1.264, 0]}
                  scale={100}
                >
                  <mesh
                    name="HydraulicHingeLower_InorganicBaked_0"
                    geometry={
                      meshNodes.HydraulicHingeLower_InorganicBaked_0.geometry
                    }
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="PistonLowerBottom"
                  position={[846.731, 413.184, 483.448]}
                  rotation={[Math.PI / 2, -0.834, -Math.PI]}
                  scale={100}
                >
                  <mesh
                    name="PistonLowerBottom_InorganicBaked_0"
                    geometry={meshNodes.PistonLowerBottom_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="TopPistonLowerHalves"
                  position={[875.68, 888.629, 0]}
                  rotation={[-Math.PI / 2, -0.371, 0]}
                  scale={100}
                >
                  <mesh
                    name="TopPistonLowerHalves_InorganicBaked_0"
                    geometry={
                      meshNodes.TopPistonLowerHalves_InorganicBaked_0.geometry
                    }
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="Empty001"
                  position={[928.344, 715.526, 0]}
                  rotation={[-Math.PI / 2, 0.096, 0]}
                  scale={100}
                />
                <group
                  name="SmallCableCluster_ControlIKL"
                  position={[802.819, 686.292, 534.56]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="SmallCableCluster_ControlIKR"
                  position={[802.819, 686.292, -534.56]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="InternalsDesk_LOW"
                  position={[678.151, 924.773, -20.127]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="InternalsDesk_LOW_InorganicBaked_0"
                    geometry={meshNodes.InternalsDesk_LOW_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="MaintenanceHatchMerged_LOW"
                  position={[-72.946, 947.534, 436.885]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="MaintenanceHatchMerged_LOW_InorganicBaked_0"
                    geometry={
                      meshNodes.MaintenanceHatchMerged_LOW_InorganicBaked_0.geometry
                    }
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="SpotlightL_LOW"
                  position={[969.631, 1011.291, 471.72]}
                  rotation={[-Math.PI / 2, -1.113, 0]}
                  scale={100}
                >
                  <mesh
                    name="SpotlightL_LOW_InorganicBaked_0"
                    geometry={meshNodes.SpotlightL_LOW_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="SpotlightR_LOW"
                  position={[969.631, 1011.291, -471.72]}
                  rotation={[-Math.PI / 2, -1.113, 0]}
                  scale={100}
                >
                  <mesh
                    name="SpotlightR_LOW_InorganicBaked_0"
                    geometry={meshNodes.SpotlightR_LOW_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="SideEngines_LOW"
                  position={[-850.819, 756.81, 489.434]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="SideEngines_LOW_InorganicBaked_0"
                    geometry={meshNodes.SideEngines_LOW_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="EngineSmallPipes_low"
                  position={[-883.078, 748.789, 640.728]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="EngineSmallPipes_low_InorganicBaked_0"
                    geometry={
                      meshNodes.EngineSmallPipes_low_InorganicBaked_0.geometry
                    }
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="DamageMerged"
                  position={[-86.108, 825.961, -500.994]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="DamageMerged_InorganicBaked_0"
                    geometry={meshNodes.DamageMerged_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="SideArmBaseBroken"
                  position={[573.667, 760.737, -580.187]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="SideArmBaseBroken_InorganicBaked_0"
                    geometry={meshNodes.SideArmBaseBroken_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="SideArmBroken_LOW"
                  position={[493.304, 760.737, -580.187]}
                  scale={[94.354, 98.872, 94.354]}
                >
                  <mesh
                    name="SideArmBroken_LOW_InorganicBaked_0"
                    geometry={meshNodes.SideArmBroken_LOW_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="TornMetalLowBottom"
                  position={[79.669, 684.703, -508.788]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="TornMetalLowBottom_InorganicBaked_0"
                    geometry={
                      meshNodes.TornMetalLowBottom_InorganicBaked_0.geometry
                    }
                    material={materials.InorganicBaked}
                  />
                </group>
                <group
                  name="FrontPiston007"
                  position={[875.68, 888.629, 0]}
                  rotation={[Math.PI / 2, 0, -Math.PI]}
                  scale={100}
                >
                  <mesh
                    name="FrontPiston007_InorganicBaked_0"
                    geometry={meshNodes.FrontPiston007_InorganicBaked_0.geometry}
                    material={materials.InorganicBaked}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Harvester;

useGLTF.preload("/harvester.gltf");
