// src/App.tsx
import React from "react";
import { ToolGrid } from "./toolGrid";
import { GlobalStyle } from "./globalStyle";
import { useNavigate } from "react-router-dom";
import elbowCenterImage from "../../assets/elbow center image.png";
import degreeImage from "../../assets/degreeCalculator.jpg";
import elbowDegree from "../../assets/elbowDegree.jpg";
import mitterCutting from "../../assets/Leonardo_Phoenix_10_Render_an_image_identical_to_the_original_2.jpg";
import pipeBrach from "../../assets/pipe Branch.png";

const tools = [
  {
    slug: "degree-calculator",
    name: "Degree Calculator",
    icon: degreeImage,
  },
  {
    slug: "mitter-tools",
    name: "Mitter Calculator",
    icon: mitterCutting,
  },
  {
    slug: "branch-calculator",
    name: "Branch Calculator",
    icon: pipeBrach,
  },
  {
    slug: "elbow-center-calculator",
    name: "elbow center Calculator",
    icon: elbowCenterImage,
  },
  {
    slug: "elbow-degree-calculator",
    name: "elbow degree Calculator",
    icon: elbowDegree,
  },
];

export const Tool: React.FC = () => {
  const navigation = useNavigate();
  const handleToolClick = (slug: string) => {
    console.log(`Tool clicked: ${slug}`);
    navigation(`tool/${slug}`);
  };

  return (
     <>
      <GlobalStyle />
      <main>
        <header style={{ textAlign: "center", marginTop: "5rem" }}>
          <h1>Available Pipe Fitting Tools</h1>
          <p>Select a tool below to begin your calculation</p>
        </header>

        <section aria-label="Tool list">
          <ToolGrid tools={tools} onToolClick={handleToolClick} />
        </section>
      </main>
    </>
  );
};
