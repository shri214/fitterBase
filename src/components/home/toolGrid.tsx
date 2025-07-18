// src/components/ToolGrid.tsx
import React from "react";
import styled from "styled-components";
import type { ToolGridProps } from "../../Interfaces/interface";

export const ToolGrid: React.FC<ToolGridProps> = ({ tools, onToolClick }) => {
  return (
    <Grid>
      {tools.map((tool) => (
        <Card key={tool.slug} onClick={() => onToolClick(tool.slug)}>
          {tool.icon && <CardImage src={tool.icon} alt={tool.name} />}
          <h3>{tool.name}</h3>
        </Card>
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.2s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-4px);
  }

  h3 {
    font-size: 1rem;
    color: #333;
    margin-top: auto; /* Push it to bottom if image grows */
  }
`;

const CardImage = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
  margin-bottom: 1rem;
  flex-grow: 1;
`;
