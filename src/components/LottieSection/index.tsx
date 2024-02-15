import { useRef } from "react";
import Lottie, { LottieRefCurrentProps, useLottie } from "lottie-react";
import DoneAnimation from "./components/DoneAnimation";
import MoveAnimation from "./components/MoveAnimation";
import pleaseWaitAnimationData from '../../assets/lottie-animation-1.json';
import clockAnimationData from '../../assets/lottie-animation-2.json';
import catAnimationData from '../../assets/lottie-animation-3.json';

const ClockAnimation = () => {
  const options = {
    animationData: clockAnimationData,
    loop: true,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

const LottieSection = () => {
  const pleaseWaitRef = useRef<LottieRefCurrentProps | null>(null);
  const catLoadingRef = useRef<LottieRefCurrentProps | null>(null);

  return (
    <>
      <div style={{ display: "flex" }}>
        <ClockAnimation />

        <Lottie
          lottieRef={pleaseWaitRef}
          animationData={pleaseWaitAnimationData}
          onMouseOver={() => pleaseWaitRef.current?.pause()}
          onMouseLeave={() => pleaseWaitRef.current?.play()}
          loop
        />
      </div>

      <div style={{ display: "flex", gap: 150 }}>
        <DoneAnimation />

        <MoveAnimation />
      </div>

      <div style={{ width: 600, margin: "120px 0 0 300px" }}>
        <Lottie
          lottieRef={catLoadingRef}
          animationData={catAnimationData}
          loop
        />
        <button type="button" onClick={() => catLoadingRef.current?.setDirection(-1)}>reverse</button>
        <button type="button" onClick={() => catLoadingRef.current?.setDirection(1)}>forward</button>
        <button type="button" onClick={() => catLoadingRef.current?.setSpeed(3)}>speed up</button>
        <button type="button" onClick={() => catLoadingRef.current?.setSpeed(1)}>slow down</button>
      </div>
    </>
  )
};

export default LottieSection;
