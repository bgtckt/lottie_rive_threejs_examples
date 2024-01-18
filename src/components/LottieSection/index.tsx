import { useRef } from "react";
import Lottie, { LottieRefCurrentProps, useLottie } from "lottie-react";
import pleaseWaitAnimation from '../../assets/lottie-animation-1.json';
import clockAnimation from '../../assets/lottie-animation-2.json';
import catAnimation from '../../assets/lottie-animation-3.json';

const Clock = () => {
  const options = {
    animationData: clockAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

const LottieSection = () => {
  const pleaseWaitRef = useRef<LottieRefCurrentProps | null>(null);
  const catLoadingRef = useRef<LottieRefCurrentProps | null>(null);

  return (
    <div style={{ width: 600 }}>
      <Lottie
        lottieRef={pleaseWaitRef}
        animationData={pleaseWaitAnimation}
        loop
        onMouseOver={() => pleaseWaitRef.current?.pause()}
        onMouseLeave={() => pleaseWaitRef.current?.play()}
      />

      <div>
        <Lottie
          lottieRef={catLoadingRef}
          animationData={catAnimation}
          loop
        />
        <button type="button" onClick={() => catLoadingRef.current?.setDirection(-1)}>reverse</button>
        <button type="button" onClick={() => catLoadingRef.current?.setDirection(1)}>forward</button>
        <button type="button" onClick={() => catLoadingRef.current?.setSpeed(3)}>speed up</button>
        <button type="button" onClick={() => catLoadingRef.current?.setSpeed(1)}>slow down</button>
      </div>

      <Clock />
    </div >
  )
}

export default LottieSection;
