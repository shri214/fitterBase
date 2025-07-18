// src/App.tsx
import React from "react";
import { ToolGrid } from "./toolGrid";
import { GlobalStyle } from "./globalStyle";
import { useNavigate } from "react-router-dom";
import elbowCenterImage from "../../assets/elbow center image.png";
import degreeImage from "../../assets/degreeCalculator.jpg";

const tools = [
  {
    slug: "degree-calculator",
    name: "Degree Calculator",
    icon: degreeImage,
  },
  {
    slug: "miter-calculator",
    name: "Miter Calculator",
    icon: "/icons/image.png",
  },
  {
    slug: "branch-calculator",
    name: "Branch Calculator",
    icon: "/icons/text.png",
  },
  {
    slug: "elbow-center-calculator",
    name: "elbow center Calculator",
    icon: elbowCenterImage,
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
      <h1 style={{ textAlign: "center", margin: "2rem 0" }}>Available Tools</h1>
      <ToolGrid tools={tools} onToolClick={handleToolClick} />
    </>
  );
};
