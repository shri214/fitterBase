import React from "react";
import { Helmet } from "react-helmet-async";
import { TriangleInputForm } from "./inputTriangleField";
import { TriangleDiagram } from "./triangle";

export const DegreeCalculation: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Degree Calculator | fitter-base</title>
        <meta
          name="description"
          content="Calculate pipe bend degrees accurately using our free fitter calculator. Ideal for field professionals and technical use."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Degree Calculation Tool" />
        <meta
          property="og:description"
          content="Free and accurate degree calculator for pipe bending offset and fitter jobs."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://fitter-base.vercel.app/tool/degree-calculator" />

      </Helmet>
      <main>
        <TriangleDiagram />
        <TriangleInputForm />
      </main>
    </>
  );
};
