import { useLottie, useLottieInteractivity } from "lottie-react";
import moveAnimationData from "../../../../assets/lottie-animation-5.json";

const MoveAnimation = () => {
  const lottieObj = useLottie({ animationData: moveAnimationData }, {
    height: 500,
    margin: "36px 0 64px",
  });

  const animation = useLottieInteractivity({
    lottieObj,
    mode: "cursor",
    actions: [
      {
        visibility: [0, 1],
        type: "seek",
        frames: [0, 200],
        position: { x: [0, 1], y: [-1, 2] },
      },
    ],
  });

  return animation;
};

export default MoveAnimation;