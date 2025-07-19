import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setElbowData } from "../../rtk/elbow.slice";
import elbowDegreeImage from "../../assets/elbowDegree.jpg";
import type { RootState } from "../../store";
import {
  CheckboxGroup,
  CheckboxLabel,
  Container,
  Form,
  Heading,
  ImageContainer,
  InfoBox,
  InputGroup,
  StyledImage,
  SubmitButton,
} from "../elbowCenterFinder";
import { elbowCenter } from "../../function/elbowCenter";
import { calculateRadii } from "../../function/elbowDegreeCutting";
import { GlobalStyle } from "../home/globalStyle";

export const ElbowDegreeCutter: React.FC = () => {
  const [selectedType, setSelectedType] = useState<"standard" | "long">(
    "standard"
  );
  const [dimension, setDimension] = useState<"2d" | "3d">("2d");
  const [elbowSize, setElbowSize] = useState<number>(0);
  const [unit, setUnit] = useState<"inch" | "mm">("inch");
  const [elbowDegree, setElbowDegree] = useState<number>(0);
  const [cutDegree, setCutDegree] = useState<number>(0);

  const dispatch = useDispatch();
  const { r1, r2, r3 } = useSelector((state: RootState) => state.elbow.data);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      type: selectedType,
      dimension: selectedType === "long" ? dimension : "2d",
      elbowSize,
      unit,
      elbowDegree,
      cutDegree,
    };
    const center = elbowCenter(formData);
    const result = calculateRadii(formData, center);
    console.log(result);
    if (result) {
      const { r1, r2, r3 } = result;
      dispatch(setElbowData({ ...formData, center, r1, r2, r3 }));
    } else {
      console.error("Failed to calculate radii.");
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Heading>Elbow Degree cutting calculator</Heading>
        <ImageContainer>
          <StyledImage src={elbowDegreeImage} alt="elbow center" />
          {r1 && (
            <InfoBox>
              <p>
                R1: <strong>{r1} mm</strong>
              </p>
              <p>
                R2: <strong>{r2}mm</strong>
              </p>
              <p>
                R3: <strong>{r3}mm</strong>
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
              placeholder="Enter total elbow degree"
              value={isNaN(elbowDegree) ? "" : elbowDegree}
              onChange={(e) => setElbowDegree(parseFloat(e.target.value))}
              required
              min="0"
              max="360"
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="cutDegree">Cut Degree</label>
            <input
              id="cutDegree"
              type="number"
              placeholder="Enter individual cut degree"
              value={isNaN(cutDegree) ? "" : cutDegree}
              onChange={(e) => setCutDegree(parseFloat(e.target.value))}
              required
              min="0"
              max="180"
            />
          </InputGroup>

          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </Container>
    </>
  );
};
