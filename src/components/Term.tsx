import React from "react";
import { Helmet } from "react-helmet-async";
import { GlobalStyle } from "./home/globalStyle";

export const Term: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>fitter-base - Terms and Conditions</title>
        <meta
          name="description"
          content="Read the terms and conditions for using fitter-base. Understand your rights and responsibilities while using our platform."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/terms" />
      </Helmet>

      <GlobalStyle />

      <div style={{ marginTop: "6rem" }}>
        <div style={{ padding: "1rem" }}>
          <h1>Terms and Conditions</h1>
          <p>Last Updated: July 19, 2025</p>

          <p>
            Welcome to <strong>fitter-base</strong>. By using this website, you
            agree to the following terms and conditions. Please read them
            carefully.
          </p>

          <h2>1. Use of the Website</h2>
          <p>
            You may use this website and its tools for personal and educational
            purposes. Commercial or abusive use is strictly prohibited without
            prior permission.
          </p>

          <h2>2. Accuracy of Information</h2>
          <p>
            We aim to provide accurate tools and data, but we do not guarantee
            100% accuracy. Always verify critical calculations, especially in
            professional environments.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            All content, including tool logic, design, and branding, is owned by
            fitter-base. Unauthorized use or reproduction is not allowed.
          </p>

          <h2>4. Limitation of Liability</h2>
          <p>
            fitter-base is not responsible for any direct or indirect losses
            resulting from the use of the website or tools. Use it at your own
            risk.
          </p>

          <h2>5. Modifications</h2>
          <p>
            We reserve the right to update or change these terms at any time.
            Continued use of the site means you accept the new terms.
          </p>

          <h2>6. Contact</h2>
          <p>
            For questions regarding these terms, please contact us at:
            support@fitter-base.com
          </p>
        </div>{" "}
      </div>
    </>
  );
};
