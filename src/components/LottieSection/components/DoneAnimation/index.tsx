import { useLottie, useLottieInteractivity } from "lottie-react";
import doneAnimationData from "../../../../assets/lottie-animation-4.json";

const style = {
  height: 500,
  marginTop: 36,
};

const options = {
  animationData: doneAnimationData,
};

const DoneAnimation = () => {
  const lottieObj = useLottie(options, style);

  const animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0.1, 0.9],
        type: "seek",
        frames: [0, 70],
      },
    ],
  });

  return animation;
};

export default DoneAnimation;