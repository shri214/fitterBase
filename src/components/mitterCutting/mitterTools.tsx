// src/App.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import singleMitter from "../../assets/single cut mitter.png"
import mitter from "../../assets/Leonardo_Phoenix_10_Render_an_image_identical_to_the_original_2.jpg"
import { GlobalStyle } from "../home/globalStyle";
import { ToolGrid } from "../home/toolGrid";


const tools = [
  {
    slug: "single-mitter",
    name: "Single Mitter Calculator",
    icon: singleMitter,
  },
  {
    slug: "multi-mitter",
    name: "Multi Mitter Calculator",
    icon: mitter,
  },
  
];

export const MitterTool: React.FC = () => {
  const navigation = useNavigate();
  const handleToolClick = (slug: string) => {
    navigation(`${slug}`);
  };

  return (
    <>
      <GlobalStyle />
      <h1 style={{ textAlign: "center", marginTop: "4rem" }}>
        Available Mitter Tools
      </h1>
      <ToolGrid tools={tools} onToolClick={handleToolClick} />
    </>
  );
};
