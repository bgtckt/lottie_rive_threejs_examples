import { useRive } from "@rive-app/react-canvas";

const CarAnimation = () => {
  const STATE_MACHINE_NAME = "Motion";

  const { rive, RiveComponent } = useRive({
    src: "rive-animation-0.riv",
    stateMachines: STATE_MACHINE_NAME,
    autoplay: false,
  });

  return (
    <RiveComponent style={{ width: 290, height: 290 }}
      onMouseEnter={() => rive && rive.play()}
      onMouseLeave={() => rive && rive.pause()}
    />
  );
};

export default CarAnimation;