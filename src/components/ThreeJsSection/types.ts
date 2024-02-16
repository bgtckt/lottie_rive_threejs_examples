import {
  Object3D,
  Object3DEventMap,
  BufferGeometry,
  NormalBufferAttributes,
  Skeleton,
  Material,
  Mesh,
} from "three";

export type MeshNodes = {
  [name: string]: Object3D<Object3DEventMap> & {
    geometry?: BufferGeometry<NormalBufferAttributes>;
    skeleton?: Skeleton;
  };
};

export type MeshStructure = Mesh<
  BufferGeometry<NormalBufferAttributes>,
  Material | Material[],
  Object3DEventMap
>;
