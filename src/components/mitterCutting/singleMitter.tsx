import React, { useState } from "react";
import { GlobalStyle } from "../home/globalStyle";
import {
  Container,
  Heading,
  ImageContainer,
  InputGroup,
  StyledImage,
  SubmitButton,
} from "../elbowCenterFinder";
import singleMitterDia from "../../assets/single mitter marking.png";
import { calculateMitterValues } from "../../function/singleMitterCalc";
import { Button } from "../../commonComponents/button";
import { toast } from "react-toastify";

export const SingleMitter: React.FC = () => {
  const [pipeSize, setPipeSize] = useState<number>(4);
  const [elbowDegree, setElbowDegree] = useState<number>(90);
  const [result, setResult] = useState<{ lcb: number; scb: number }>({
    lcb: 0,
    scb: 0,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    if(elbowDegree<=0){
      toast.error("elbow degree must be > 0");
    }
    try {
      const { lcb, scb } = calculateMitterValues(pipeSize, elbowDegree);
      setResult({ lcb, scb });
    } catch (err:any) {
      console.log(err)
      toast.warn(err.message||"something went wrong");
    }
  };

  const handleClear = () => {
    setPipeSize(0);
    setElbowDegree(0);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Heading>Single Mitter Cut Length in 8 Center Line</Heading>

        <ImageContainer>
          <StyledImage src={singleMitterDia} alt="single mitter diagram" />
        </ImageContainer>

        {result.lcb !== 0 && result.scb !== 0 && (
          <div>
            <p style={{ marginTop: "1rem", fontWeight: "bold" }}>
              (90) Long Cut Length: {result.lcb} mm
            </p>
            <p style={{ marginTop: "1rem", fontWeight: "bold" }}>
              (45) Short Cut Length: {result.scb} mm
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <InputGroup>
            <label htmlFor="pipeSize">Pipe Size</label>
            <input
              id="pipeSize"
              type="number"
              step="any"
              placeholder="Enter pipe size"
              value={isNaN(pipeSize) ? "" : pipeSize}
              onChange={(e) => setPipeSize(parseFloat(e.target.value))}
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

          <SubmitButton type="submit">Calculate</SubmitButton>
          <Button
            type="button"
            variant="danger"
            size="large"
            onClick={handleClear}
          >
            Clear
          </Button>
        </form>
      </Container>
    </>
  );
};
