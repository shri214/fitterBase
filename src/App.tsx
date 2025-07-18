import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { DegreeCalculation } from "./components/degreeCalc/degreeCalculation";
import { ElbowCenter } from "./components/elbowCutting";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tool/degree-calculator" element={<DegreeCalculation />} />
      <Route path="/tool/elbow-center-calculator" element={<ElbowCenter />} />
    </Routes>
  );
};
