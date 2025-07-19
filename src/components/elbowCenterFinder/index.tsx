import React, { useState } from "react";
import styled from "styled-components";
import { elbowCenter } from "../../function/elbowCenter";
import { useDispatch } from "react-redux";
import { setElbowData } from "../../rtk/elbow.slice";
import elbowCenterImage from "../../assets/elbow center image.png";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { GlobalStyle } from "../home/globalStyle";

export const Container = styled.section`
  max-width: 480px;
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

export const Heading = styled.h1`
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const CheckboxLabel = styled.label`
  margin: 4px 0;
  font-size: 1rem;
  input {
    margin-right: 8px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
    margin-bottom: 4px;
    font-weight: 500;
  }

  input,
  select {
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 1rem;
  }
`;

export const SubmitButton = styled.button`
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  background-color: #0077cc;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #005fa3;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

export const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
`;

export const ElbowCenter: React.FC = () => {
  const [selectedType, setSelectedType] = useState<"standard" | "long">(
    "standard"
  );
  const [dimension, setDimension] = useState<"2d" | "3d">("2d");
  const [elbowSize, setElbowSize] = useState<number>(0);
  const [unit, setUnit] = useState<"inch" | "mm">("inch");
  const [elbowDegree, setElbowDegree] = useState<number>(0);

  const dispatch = useDispatch();
  const { center, elbowDegree: deg } = useSelector(
    (state: RootState) => state.elbow.data
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      type: selectedType,
      dimension: selectedType === "long" ? dimension : "2d",
      elbowSize,
      unit,
      elbowDegree,
    };
    const center = elbowCenter(formData);
    dispatch(setElbowData({ ...formData, center }));
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Heading>Elbow center calculator</Heading>
        <ImageContainer>
          <StyledImage src={elbowCenterImage} alt="elbow center" />
          {center && (
            <InfoBox>
              <p>
                Center of Elbow: <strong>{center} mm</strong>
              </p>
              <p>
                Elbow elbowDegree: <strong>{deg}°</strong>
              </p>
            </InfoBox>
          )}
        </ImageContainer>
        <CheckboxGroup role="group" aria-labelledby="type-label">
          <label id="type-label">Select Pipe Type:</label>
          <CheckboxLabel>
            <input
              type="checkbox"
              checked={selectedType === "standard"}
              onChange={() => setSelectedType("standard")}
            />
            Standard
          </CheckboxLabel>
          <CheckboxLabel>
            <input
              type="checkbox"
              checked={selectedType === "long"}
              onChange={() => setSelectedType("long")}
            />
            Long
          </CheckboxLabel>
        </CheckboxGroup>

        {selectedType === "long" && (
          <CheckboxGroup role="group" aria-labelledby="dim-label">
            <label id="dim-label">Select Dimension:</label>
            <CheckboxLabel>
              <input
                type="checkbox"
                checked={dimension === "2d"}
                onChange={() => setDimension("2d")}
              />
              2D
            </CheckboxLabel>
            <CheckboxLabel>
              <input
                type="checkbox"
                checked={dimension === "3d"}
                onChange={() => setDimension("3d")}
              />
              3D
            </CheckboxLabel>
          </CheckboxGroup>
        )}

        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <label htmlFor="unit">Select Unit</label>
            <select
              id="unit"
              value={unit}
              onChange={(e) => setUnit(e.target.value as "inch" | "mm")}
            >
              <option value="inch">Inch</option>
              <option value="mm">Millimeter (mm)</option>
            </select>
          </InputGroup>

          <InputGroup>
            <label htmlFor="elbowSize">Elbow Size</label>
            <input
              id="elbowSize"
              type="number"
              step="any"
              placeholder="Enter pipe size"
              value={isNaN(elbowSize) ? "" : elbowSize}
              onChange={(e) => setElbowSize(parseFloat(e.target.value))}
              required
              min="0"
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="elbowDegree">Elbow Degree</label>
            <input
              id="elbowDegree"
              type="number"
              placeholder="Enter Elbow Degree"
              value={isNaN(elbowDegree) ? "" : elbowDegree}
              onChange={(e) => setElbowDegree(parseFloat(e.target.value))}
              required
              min="0"
              max="360"
            />
          </InputGroup>

          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </Container>
    </>
  );
};
