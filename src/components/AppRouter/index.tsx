import { Route, Routes } from "react-router-dom";
import LottieSection from "../LottieSection";
import RiveSection from "../RiveSection";

const AppRouter = () => (
  <Routes>
    <Route path='/' element={<LottieSection />} />
    <Route path='/rive' element={<RiveSection />} />
  </Routes>
);

export default AppRouter;