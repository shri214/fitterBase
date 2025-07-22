// src/App.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "../home/globalStyle";
import { ToolGrid } from "../home/toolGrid";
import equalBranchImg from "../../assets/equal branch.png"
import unEqualBranchImg from "../../assets/unequal branch.png"
import lateralUnEqlBranchImg from "../../assets/lateral unequal.png"
import lateralEqlBranchImg from "../../assets/lateral equal.png"


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
      <GlobalStyle />
      <h1 style={{ textAlign: "center", marginTop: "4rem" }}>
        Available Branch Tools
      </h1>
      <ToolGrid tools={tools} onToolClick={handleToolClick} />
    </>
  );
};
