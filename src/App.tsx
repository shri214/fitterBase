import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { DegreeCalculation } from "./components/degreeCalc/degreeCalculation";
import { ElbowCenter } from "./components/elbowCenterFinder";
import { ElbowDegreeCutter } from "./components/elbowDegreeCutting";
import { MitterTools } from "./components/mitterCutting";
import { About } from "./components/About";
import { Term } from "./components/Term";
import { Navbar } from "./components/home/navbar";
import { SingleMitter } from "./components/mitterCutting/singleMitter";
import { ToastContainer } from "react-toastify";
import { MultiMiter } from "./components/mitterCutting/multiMitter";
import { Branch } from "./components/branchCutting/branch";
import { EqualBranch } from "./components/branchCutting/equalBranch";
import { UnEqualBranch } from "./components/branchCutting/unequalBranch";
import { LateralBranch } from "./components/branchCutting/lateralBranch";

export const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ top: "4rem" }}
      />
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
        <Route path="/about-us" element={<About />} />
        <Route path="/term-and-conditions" element={<Term />} />
        <Route
          path="/tool/mitter-tools/single-mitter"
          element={<SingleMitter />}
        />
        <Route
          path="/tool/mitter-tools/multi-mitter"
          element={<MultiMiter />}
        />
        <Route path="/tool/branch-calculator" element={<Branch />} />
        <Route
          path="/tool/branch-calculator/equal-branch"
          element={<EqualBranch />}
        />
        <Route
          path="/tool/branch-calculator/unequal-branch"
          element={<UnEqualBranch />}
        />
        <Route
          path="/tool/branch-calculator/:type"
          element={<LateralBranch />}
        />
        <Route
          path="/tool/branch-calculator/:type"
          element={<LateralBranch />}
        />
      </Routes>
    </>
  );
};
