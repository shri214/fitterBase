import type { RootState } from "../../store";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const DiagramContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding: 1rem 0;
`;

const Rectangle = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1; /* Keep it square */
  background-color: #f0f0f0;
`;

const TriangleSVG = styled.svg`
  width: 100%;
  height: 100%;
`;

const Label = styled.text`
  font-size: 14px;
  fill: #000;
`;

const Angle = styled.text`
  font-size: 12px;
  fill: #0070f3;
`;

export const TriangleDiagram: React.FC = () => {
  const { sideA, sideB, sideC } = useSelector(
    (state: RootState) => state.triangle
  );
  return (
    <DiagramContainer>
      <Rectangle>
        <TriangleSVG viewBox="0 0 200 200">
          {/* Replace styled.polygon with raw polygon + inline styles */}
          <polygon
            points="20,180 180,180 20,20"
            fill="none"
            stroke="#333"
            strokeWidth="2"
          />

          <Label x="80" y="195">
            {sideA > 0 ? `a (${sideA})` : "a"}
          </Label>
          <Label x="10" y="100">
            {sideB > 0 ? `b (${sideB})` : "b"}
          </Label>
          <Label x="95" y="95">
            {sideC > 0 ? `c (${sideC})` : "c"}
          </Label>
          <Angle x="25" y="175">
            ∠90
          </Angle>
          <Angle x="150" y="175">
            ∠α
          </Angle>
          <Angle x="25" y="50">
            ∠β
          </Angle>
        </TriangleSVG>
      </Rectangle>
    </DiagramContainer>
  );
};
