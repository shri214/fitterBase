import React from "react";
import { Helmet } from "react-helmet-async";
import { GlobalStyle } from "./home/globalStyle";

export const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>FitterBase - About Us</title>
        <meta
          name="description"
          content="Learn more about FitterBase — our mission, vision, and the team behind the platform empowering fitters and professionals."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/about" />
      </Helmet>

      <GlobalStyle />
      <div style={{ marginTop: "6rem" }}>
        <div style={{ padding: "1rem" }}>
          <h1>About FitterBase</h1>
          <p>
            FitterBase is a dedicated platform created to help mechanical
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
            Designed with simplicity and responsiveness in mind, FitterBase is
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
