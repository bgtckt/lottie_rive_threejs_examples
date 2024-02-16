import { useEffect, useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import debounce from "debounce";
import { MeshStructure } from "../../types";

import panelTexture from "/panel_texture.jpg";

const MAX_Y_COORD = 0.5;
const MIN_Y_COORD = 0.3;
const COORD_STEP = 0.001;
const DELAY_IN_MS = 10;

const roundCoord = (coord: number) => (Math.round(coord * 100) / 100);

const Droid = () => {
  const meshRef = useRef<MeshStructure | null>(null);
  const droidTextureMap = useLoader(TextureLoader, panelTexture);

  const [y, setY] = useState(MIN_Y_COORD);
  const [direction, setDirection] = useState<"up" | "down">("up");

  const getUp = debounce(() => setY((prev) => prev + COORD_STEP), DELAY_IN_MS);

  const goDown = debounce(() => setY((prev) => prev - COORD_STEP), DELAY_IN_MS);

  useEffect(() => {
    if (roundCoord(y) === MAX_Y_COORD) {
      setDirection("down");
    }

    if (roundCoord(y) === MIN_Y_COORD) {
      setDirection("up");
    }
  }, [y]);

  useEffect(() => {
    if (direction === "up") {
      getUp();
    }

    if (direction === "down") {
      goDown();
    }
  }, [y]);

  return (
    <mesh ref={meshRef} position={[-0.3, y, 0.2]}>
      <sphereGeometry args={[0.03, 128, 128]} />
      <meshStandardMaterial map={droidTextureMap} metalness={0.5} roughness={0} />
    </mesh>
  );
}

export default Droid;