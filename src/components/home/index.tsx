import { Tool } from "./tool";
import { Helmet } from "react-helmet-async";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>fitter-base - Home</title>
        <meta
          name="description"
          content="Explore the best pipe fitting tools, formulas, and calculators for fabricators and engineers on fitter-base."
        />
        <meta
          name="keywords"
          content="fitter tools, pipe fitting, fabrication, elbow cutting, pipe calculator, pipe layout"
        />
        <link rel="canonical" href="https://fitter-base.vercel.app/" />

        {/* Open Graph */}
        <meta property="og:title" content="fitter-base - Fitter Tools & Calculators" />
        <meta
          property="og:description"
          content="Get pipe fitting calculators and guides used by professionals in fabrication and design."
        />
        <meta property="og:url" content="https://fitter-base.vercel.app/" />
        <meta property="og:image" content="https://fitter-base.vercel.app/logo.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="fitter-base - Fitter Tools & Calculators" />
        <meta
          name="twitter:description"
          content="Explore top tools and calculators for fitters and fabricators."
        />
        <meta name="twitter:image" content="https://fitter-base.vercel.app/logo.jpg" />
      </Helmet>

      <Tool />
    </>
  );
};
