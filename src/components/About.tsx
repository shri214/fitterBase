import React from "react";
import { Helmet } from "react-helmet-async";
import { GlobalStyle } from "./home/globalStyle";

export const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us | FitterBase - Pipe & Fabrication Tools</title>
        <meta
          name="description"
          content="Discover FitterBase – a free platform offering accurate tools for pipe fitting, elbow cutting, and fabrication calculations. Learn about our mission and vision."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/about" />

        <meta property="og:title" content="About Us | FitterBase" />
        <meta
          property="og:description"
          content="Learn about FitterBase's mission to empower fitters with free tools for pipe fitting and fabrication calculations."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/about" />
        <meta property="og:image" content="https://yourdomain.com/logo.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | FitterBase" />
        <meta
          name="twitter:description"
          content="Explore the story behind FitterBase – free tools for fabrication, pipe layout, and more."
        />
        <meta name="twitter:image" content="https://yourdomain.com/logo.jpg" />
      </Helmet>

      <GlobalStyle />
      <div style={{ marginTop: "6rem" }}>
        <div style={{ padding: "1rem" }}>
          <h1>About fitter-base</h1>
          <p>
            fitter-base is a dedicated platform created to help mechanical
            fitters, engineers, and students perform essential calculations
            quickly and accurately. Whether you're in the workshop or on-site,
            our tools are built to assist with daily fabrication tasks.
          </p>
          <p>
            Our mission is to empower tradespeople by providing easy-to-use,
            accessible, and reliable calculation tools for elbow cutting, pipe
            fitting, and more.
          </p>
          <p>
            Designed with simplicity and responsiveness in mind, fitter-base is
            100% free to use and continuously improving based on your feedback.
          </p>
          <p>
            We believe technology should support hands-on professionals. That's
            why our tools are mobile-friendly, fast, and don't require sign-up.
          </p>
        </div>
      </div>
    </>
  );
};
