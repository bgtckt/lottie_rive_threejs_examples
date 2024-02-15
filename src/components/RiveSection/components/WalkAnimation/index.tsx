import { useRive, useStateMachineInput } from "@rive-app/react-canvas";

const WalkAnimation = () => {
  const STATE_MACHINE_NAME = "Motion";
  const STATE_MACHINE_INPUT_NAME = "Skin";

  const { rive, RiveComponent } = useRive({
    src: "rive-animation-1.riv",
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  const changeSkinInput = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    STATE_MACHINE_INPUT_NAME
  );

  return (
    <RiveComponent style={{ width: 600, height: 600 }} onClick={() => changeSkinInput?.fire()} />
  );
};

export default WalkAnimation;
