// src/App.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "../home/globalStyle";
import { ToolGrid } from "../home/toolGrid";
import equalBranchImg from "../../assets/equal branch.png";
import unEqualBranchImg from "../../assets/unequal branch.png";
import lateralUnEqlBranchImg from "../../assets/lateral unequal.png";
import lateralEqlBranchImg from "../../assets/lateral equal.png";
import { Helmet } from "react-helmet-async";

const tools = [
  {
    slug: "equal-branch",
    name: "Equal Branch Calculator",
    icon: equalBranchImg,
  },
  {
    slug: "unequal-branch",
    name: "Unequal Branch Calculator",
    icon: unEqualBranchImg,
  },
  {
    slug: "lateral-equal-branch",
    name: "Lateral Equal Branch Calculator",
    icon: lateralEqlBranchImg,
  },
  {
    slug: "lateral-unequal-branch",
    name: "Lateral Unequal Branch Calculator",
    icon: lateralUnEqlBranchImg,
  },
];

export const Branch: React.FC = () => {
  const navigation = useNavigate();
  const handleToolClick = (slug: string) => {
    console.log(`Tool clicked: ${slug}`);
    navigation(`${slug}`);
  };

  return (
    <>
      <Helmet>
        <title>
          Branch Calculator Tools | Equal, Unequal & Lateral Tees - FitterBase
        </title>
        <meta
          name="description"
          content="Use our branch calculator tools for precise tee and lateral fittings. Includes equal and unequal branch calculators for piping and fabrication work."
        />
        <meta
          name="keywords"
          content="tee branch calculator, equal branch pipe, unequal tee fitting, lateral tee branch, pipe fitting calculator, fabrication layout"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Branch Calculation Tools for Tees & Laterals"
        />
        <meta
          property="og:description"
          content="Free and accurate calculators for equal & unequal tee branches and lateral branches. Ideal for fabrication professionals and piping design."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <GlobalStyle />
      <h1 style={{ textAlign: "center", marginTop: "4rem" }}>
        Available Branch Tools
      </h1>
      <ToolGrid tools={tools} onToolClick={handleToolClick} />
    </>
  );
};
