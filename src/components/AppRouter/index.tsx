import { Route, Routes } from "react-router-dom";
import LottieSection from "../LottieSection";
import RiveSection from "../RiveSection";
import ThreeJsSection from "../ThreeJsSection";

const AppRouter = () => (
  <Routes>
    <Route path='/' element={<LottieSection />} />
    <Route path='/rive' element={<RiveSection />} />
    <Route path='/3d' element={<ThreeJsSection />} />
  </Routes>
);

export default AppRouter;