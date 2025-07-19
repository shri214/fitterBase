import { Helmet } from "react-helmet-async";
import { MitterTool } from "./mitterTools";
import { GlobalStyle } from "../home/globalStyle";

export const MitterTools = () => {
  return (
    <>
      <Helmet>
        <title>FitterBase - Mitter Tools</title>
        <meta
          name="description"
          content="Welcome to FitterBase - Explore the best tools and guides for fitters, designers, and makers."
        />
        <meta
          name="keywords"
          content="fitter tools, fabrication, elbow cutter, pipe fitting"
        />
        {/* <link rel="canonical" href="https://yourdomain.com/" /> */}
      </Helmet>

      <div>
        <GlobalStyle />
        <MitterTool />
      </div>
    </>
  );
};
