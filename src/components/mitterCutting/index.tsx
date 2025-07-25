import { Helmet } from "react-helmet-async";
import { MitterTool } from "./mitterTools";
import { GlobalStyle } from "../home/globalStyle";

export const MitterTools = () => {
  return (
    <>
      <Helmet>
        <title>Single Cut & 3-Cut Mitre Calculator | FitterBase Tools</title>
        <meta
          name="description"
          content="Use FitterBase's free mitre cutting tools for accurate single cut, 3-cut, and multi-cut mitre angle calculations. Ideal for pipefitters, fabricators, and technicians."
        />
        <meta
          name="keywords"
          content="single cut mitre, 3 cut mitre, mitre cutting calculator, fitter tools, pipe fitting, fabrication tools"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Mitre Cutting Tools | FitterBase" />
        <meta
          property="og:description"
          content="Accurate and easy mitre cutting calculators for fitters and fabricators. Calculate single cut and 3 cut mitre angles easily."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://fitter-base.vercel.app/tool/mitter-tools" />
      </Helmet>

      <div>
        <GlobalStyle />
        <MitterTool />
      </div>
    </>
  );
};
