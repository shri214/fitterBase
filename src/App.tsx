import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { DegreeCalculation } from "./components/degreeCalc/degreeCalculation";
import { ElbowCenter } from "./components/elbowCenterFinder";
import { ElbowDegreeCutter } from "./components/elbowDegreeCutting";
import { MitterTools } from "./components/mitterCutting";
import { About } from "./components/About";
import { Term } from "./components/Term";
import { Navbar } from "./components/home/navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tool/degree-calculator" element={<DegreeCalculation />} />
        <Route path="/tool/elbow-center-calculator" element={<ElbowCenter />} />
        <Route
          path="/tool/elbow-degree-calculator"
          element={<ElbowDegreeCutter />}
        />
        <Route path="/tool/mitter-tools" element={<MitterTools />} />
        <Route path="/about-us" element={<About/>}/>
        <Route path="/term-and-conditions" element={<Term/>}/>
      </Routes>
    </>
  );
};
