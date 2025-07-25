// src/components/MultiMiter.tsx
import React, { useState } from "react";
import styled from "styled-components";
import { GlobalStyle } from "../home/globalStyle";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ImageContainer, InfoBox, StyledImage } from "../elbowCenterFinder";
import multiMitterDiagram from "../../assets/multimiterDai.png";
import { calculateMitterCuts } from "../../function/multiMitter";

const PageWrapper = styled.div`
  padding: 1rem;
  text-align: center;
  max-width: 60%;
  display: block;
  margin: auto;

   @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-top: 3em;
  color: #222;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem auto 2rem auto;
  padding: 1.5rem;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.05);

  @media (max-width: 500px) {
    padding: 1rem;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 0.6rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 0.6rem;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const MultiMiter: React.FC = () => {
  const [radiusType, setRadiusType] = useState<"short" | "standard" | "long">(
    "standard"
  );
  const [pipeSize, setPipeSize] = useState("");
  const [degree, setDegree] = useState("");
  const [numCuts, setNumCuts] = useState("");
  const [result, setResult] = useState({ cutBack: 0, longCut: 0 });

  const handleRadiusChange = (value: "short" | "standard" | "long") => {
    setRadiusType(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const parsedCuts = parseInt(numCuts);
    if (!radiusType || !pipeSize || !degree || !numCuts) {
      toast.error("All fields are required");
      return;
    }

    if (parsedCuts < 2) {
      toast.error("Number of cuts can't be less than 2");
      return;
    }

    const values = {
      radiusType,
      pipeSize: parseFloat(pipeSize),
      degree: parseFloat(degree),
      numCuts: parsedCuts,
    };
    const { longCut, cutBack } = calculateMitterCuts(values);
    setResult({ cutBack, longCut });
   
  };

  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <Heading>Multi Cut Miter Calculator</Heading>
        <h3>Marking should be in 8 CL</h3>
        <ImageContainer>
          <StyledImage src={multiMitterDiagram} alt="multi mitter" loading="lazy"/>
          {result.cutBack > 0 && result.longCut > 0 && (
            <InfoBox>
              <p>
                cutBack <strong>{result.cutBack} mm</strong>
              </p>
              <p>
                side Pice <strong>{result.longCut/2} mm</strong>
              </p>
              <p>
                middle pice <strong>{result.longCut}mm</strong>
              </p>
            </InfoBox>
          )}
        </ImageContainer>
        <Form onSubmit={handleSubmit}>
          <CheckboxGroup>
            <Label>
              <input
                type="checkbox"
                checked={radiusType === "short"}
                onChange={() => handleRadiusChange("short")}
              />
              Short Radius
            </Label>
            <Label>
              <input
                type="checkbox"
                checked={radiusType === "standard"}
                onChange={() => handleRadiusChange("standard")}
              />
              Standard Radius
            </Label>
            <Label>
              <input
                type="checkbox"
                checked={radiusType === "long"}
                onChange={() => handleRadiusChange("long")}
              />
              Long Radius
            </Label>
          </CheckboxGroup>

          <Input
            type="number"
            placeholder="Pipe Size"
            value={pipeSize}
            onChange={(e) => setPipeSize(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Degree"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />
          <Input
            type="number"
            placeholder="No. of Cuts"
            value={numCuts}
            onChange={(e) => setNumCuts(e.target.value)}
          />

          <Button type="submit">Submit</Button>
        </Form>
        <ToastContainer position="top-center" />
      </PageWrapper>
    </>
  );
};
