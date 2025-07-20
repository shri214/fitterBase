import React, { useState } from "react";
import styled from "styled-components";
import type { TriangleInput } from "../../Interfaces/interface";
import { Button } from "../../commonComponents/button";
import { PythagorasCal } from "../../function/pythagoras";
import { TanInverse } from "../../function/tanInverse";
import { useDispatch } from "react-redux";
import { resetTriangle, setTriangles } from "../../rtk/triangle.slice";
import { toast } from "react-toastify";


const FormWrapper = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.25rem;
  color: #333;
`;
const StyledInput = styled.input`
  padding: 0.6rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const Heading = styled.h3`
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

export const TriangleInputForm: React.FC = () => {
  const dispatch = useDispatch();

  const [triangle, setTriangle] = useState<TriangleInput>({
    sideA: 0,
    sideB: 0,
    sideC: 0,
    angleAlpha: 0,
    angleBeta: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTriangle((prev) => ({
      ...prev,
      [name]: parseFloat(value),
    }));
  };
  // const { sideA, sideB, sideC, angleAlpha, angleBeta } = useSelector(
  //   (state: RootState) => state.triangle
  // );
  const handleClearInputs = (): void => {
    setTriangle({
      sideA: 0,
      sideB: 0,
      sideC: 0,
      angleAlpha: 0,
      angleBeta: 0,
    });
    dispatch(resetTriangle());
  };

  const cleanTriangle = (triangle: TriangleInput): TriangleInput => ({
    sideA: isNaN(triangle.sideA) ? 0 : triangle.sideA,
    sideB: isNaN(triangle.sideB) ? 0 : triangle.sideB,
    sideC: isNaN(triangle.sideC) ? 0 : triangle.sideC,
    angleAlpha: isNaN(triangle.angleAlpha) ? 0 : triangle.angleAlpha,
    angleBeta: isNaN(triangle.angleBeta) ? 0 : triangle.angleBeta,
  });

  const handleCalc = (triangle: TriangleInput) => {
    const triangles = cleanTriangle(triangle);

    const filledSides = [
      triangles.sideA,
      triangles.sideB,
      triangles.sideC,
    ].filter((s) => s > 0).length;
    if (filledSides < 2) {
      toast.warn("fill any two side");
      return;
    }
    if (
      triangles.sideC > 0 &&
      (triangles.sideA > triangles.sideC || triangles.sideB > triangles.sideC)
    ) {
      const greaterSide =
        triangles.sideA > triangles.sideB ? "Side A" : "Side B";
      toast.warn(`Side C can't be less than ${greaterSide}`);
      setTriangle((prev: TriangleInput) => ({
        ...prev,
        sideC: 0,
      }));
      return;
    }

    if (
      triangles.sideA === 0 ||
      triangles.sideB === 0 ||
      triangles.sideC === 0
    ) {
      let result = PythagorasCal(triangles);
      if (typeof result === "string") {
        toast.warn("please c must be greater than both side ");
      } else {
        result = TanInverse(result);
        dispatch(setTriangles(result));
        setTriangle(result);
      }
    } else if (triangles.angleAlpha === 0 || triangles.angleBeta === 0) {
      const result = TanInverse(triangles);
      dispatch(setTriangles(result));
      setTriangle(result);
    }
  };

  const handleKnowMore = (): void => {
    console.log("just reading");
  };

  return (
    <FormWrapper>
      <Heading>Triangle Input</Heading>
      <InputGroup>
        <Label htmlFor="Side A">Side A</Label>
        <StyledInput
          type="number"
          name="sideA"
          placeholder="Side A"
          value={isNaN(triangle.sideA)?"":triangle.sideA}
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="Side B">Side B</Label>
        <StyledInput
          type="number"
          name="sideB"
          placeholder="Side B"
          value={isNaN(triangle.sideB)?"":triangle.sideB}
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="Side C">Side C</Label>
        <StyledInput
          type="number"
          name="sideC"
          placeholder="Side C"
          value={isNaN(triangle.sideC)?"":triangle.sideC}
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="angleAlpha">Angle α (degree)</Label>
        <StyledInput
          type="number"
          name="angleAlpha"
          placeholder="Angle ∠α"
          value={triangle.angleAlpha}
          onChange={handleChange}
          disabled
        />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="angleBeta">Angle β (degrees)</Label>
        <StyledInput
          type="number"
          name="angleBeta"
          placeholder="Angle ∠β"
          value={triangle.angleBeta}
          onChange={handleChange}
          disabled
        />
      </InputGroup>
      <Button
        variant="primary"
        size="medium"
        onClick={() => handleCalc(triangle)}
      >
        Submit
      </Button>

      <Button variant="danger" size="medium" onClick={handleClearInputs}>
        Clear
      </Button>
      <Button variant="secondary" size="medium" onClick={handleKnowMore}>
        Read more
      </Button>
    </FormWrapper>
  );
};
