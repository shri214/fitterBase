import React, { useState, useEffect } from "react";
import type { IBranch, IEqualRes } from "../../Interfaces/interface";
import { Button } from "../../commonComponents/button";
import { GlobalStyle } from "../home/globalStyle";
import {
  FormWrapper,
  Heading,
  InputGroup,
  Label,
  StyledInput,
} from "../degreeCalc/inputTriangleField";
import {
  Container,
  ImageContainer,
  InfoBox,
  StyledImage,
} from "../elbowCenterFinder";

import lateralEql from "../../assets/lateral equal.png";
import lateralUnEql from "../../assets/lateral unequal.png";
import { toast } from "react-toastify";
import { calculateLateralBranch } from "../../function/lateralCalc";
import { StyledSelect } from "./unequalBranch";
import { useParams } from "react-router-dom";

export const LateralBranch: React.FC = () => {
  // assuming your route is like: /tool/:type
  const { type } = useParams<{ type: string }>();
  const [branch, setBranch] = useState<IBranch>({
    HeaderOd: 0,
    branchOd: 0,
  });
  const [result, setResult] = useState<IEqualRes | null>({ cl: "" });
  const [centerLine, setCenterLine] = useState<number>(8);
  const [lateralDegree, setLateralDegree] = useState<number>(45);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "centerLine") {
      setCenterLine(Number(value));
    } else if (name === "lateralDegree") {
      setLateralDegree(Number(value));
    } else {
      setBranch((prev) => ({
        ...prev,
        [name]: parseFloat(value),
      }));
    }
  };

  const validateInputs = (): boolean => {
    if (branch.HeaderOd <= 0 || branch.branchOd <= 0) {
      toast("Header OD and Branch OD must be greater than 0");
      return false;
    }
    if (branch.HeaderOd <= branch.branchOd) {
      toast("Header OD must be greater than Branch OD");
      return false;
    }
    if (lateralDegree <= 0 || lateralDegree >= 180) {
      toast("Lateral Degree must be between 1 and 179");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateInputs()) return;

    const res = calculateLateralBranch(centerLine, lateralDegree, branch);
    setResult(res);
  };

  const handleClear = () => {
    setBranch({ HeaderOd: 0, branchOd: 0 });
    setLateralDegree(45);
    setCenterLine(8);
    setResult({ cl: "" });
  };

  useEffect(() => {
    handleClear();
  }, []);

  return (
    <Container>
      <GlobalStyle />
      <Heading style={{ marginTop: "2em" }}>
        Lateral {type === "lateral-equal-branch" ? "Equal" : "Un Equal"} Branch
        Calculator
      </Heading>

      <ImageContainer>
        <StyledImage
          src={type === "lateral-equal-branch" ? lateralEql : lateralUnEql}
          alt="Lateral Branch"
          loading="lazy"
        />
        {result?.cl && (
          <InfoBox>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "8px",
                      borderBottom: "1px solid #ccc",
                    }}
                  >
                    Angle (°)
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "8px",
                      borderBottom: "1px solid #ccc",
                    }}
                  >
                    Value (mm)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style={{ padding: "8px", borderBottom: "1px solid #eee" }}
                  >
                    Center Line
                  </td>
                  <td
                    style={{ padding: "8px", borderBottom: "1px solid #eee" }}
                  >
                    <strong>{result.cl}</strong>
                  </td>
                </tr>
                {Object.entries(result).map(([angle, value]) => {
                  if (angle !== "cl") {
                    return (
                      <tr key={angle}>
                        <td
                          style={{
                            padding: "8px",
                            borderBottom: "1px solid #eee",
                          }}
                        >
                          {angle}°
                        </td>
                        <td
                          style={{
                            padding: "8px",
                            borderBottom: "1px solid #eee",
                          }}
                        >
                          <strong>{value} mm</strong>
                        </td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>
          </InfoBox>
        )}
      </ImageContainer>

      <FormWrapper style={{ maxWidth: "99%" }}>
        <InputGroup>
          <Label htmlFor="HeaderOd">Header OD</Label>
          <StyledInput
            type="number"
            name="HeaderOd"
            step="any"
            placeholder="Enter Header OD"
            value={branch.HeaderOd || ""}
            onChange={handleInputChange}
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="branchOd">Branch ID</Label>
          <StyledInput
            type="number"
            name="branchOd"
            step="any"
            placeholder="Enter Branch ID"
            value={branch.branchOd || ""}
            onChange={handleInputChange}
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="lateralDegree">Lateral Degree</Label>
          <StyledInput
            type="number"
            name="lateralDegree"
            step="any"
            placeholder="Enter degree (1–179)"
            value={lateralDegree || ""}
            onChange={handleInputChange}
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="centerLine">Center Line</Label>
          <StyledSelect
            name="centerLine"
            value={centerLine}
            onChange={handleInputChange}
          >
            <option value={8}>8</option>
            <option value={16}>16</option>
          </StyledSelect>
        </InputGroup>

        <Button variant="primary" size="medium" onClick={handleSubmit}>
          Submit
        </Button>

        <Button variant="danger" size="medium" onClick={handleClear}>
          Clear
        </Button>
      </FormWrapper>
    </Container>
  );
};
