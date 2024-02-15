import Rive from "@rive-app/react-canvas";
import CarAnimation from "./components/CarAnimation";
import WalkAnimation from "./components/WalkAnimation";

const RiveSection = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
    <div style={{ display: "flex", gap: 24 }}>
      <Rive
        style={{ width: 500, height: 280 }}
        src="https://cdn.rive.app/animations/vehicles.riv"
        stateMachines="bumpy"
      />

      <WalkAnimation />

      <CarAnimation />
    </div>
  </div>
);

export default RiveSection;
