import React, { useEffect, useState } from "react";
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
import styled from "styled-components";
import {
  CheckboxGroup,
  CheckboxLabel,
  Container,
  ImageContainer,
  InfoBox,
  StyledImage,
} from "../elbowCenterFinder";

import unequalBranchImg from "../../assets/unequal branch.png";
import { toast } from "react-toastify";
import { calculateEqualBranch } from "../../function/equalBranch";

// Styled Select
export const StyledSelect = styled.select`
  padding: 8px;
  font-size: 1rem;
  margin-top: 5px;
`;

export const UnEqualBranch: React.FC = () => {
  const [Branch, setBranch] = useState<IBranch>({
    branchOd: 0,
    HeaderOd: 0,
  });

  const [selectedType, setSelectedType] = useState<
    "unEqlOldFormula" | "unEqlNewFormula"
  >("unEqlOldFormula");
  const [result, setResult] = useState<IEqualRes | null>({
    cl: "",
  });
  const [centerLine, setCenterLine] = useState<number>(8);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "centerLine") {
      setCenterLine(Number(value));
    } else {
      setBranch((prev) => ({
        ...prev,
        [name]: parseFloat(value),
      }));
    }
  };

  const handleClear = () => {
    setBranch({ branchOd: 0, HeaderOd: 0 });
    setCenterLine(8);
    setResult({ cl: "" });
  };

  const validateBranchInput = (
    selectedType: string,
    Branch: IBranch
  ): boolean => {
    if (selectedType === "unEqlOldFormula") {
      if (Branch.HeaderOd <= 0 || Branch.branchOd <= 0) {
        toast("Both Header OD and Branch Od must be greater than 0 ");
        return false;
      }
    }
    if (Branch.HeaderOd === Branch.branchOd) {
      toast("Both OD can't be same 😊");
      return false;
    }
    if (selectedType === "unEqlNewFormula") {
      if (Branch.HeaderOd <= 0 || Branch.branchOd <= 0) {
        toast("Both Header OD and Branch OD must be greater than 0 ");
        return false;
      }

      if (Branch.HeaderOd <= Branch.branchOd) {
        toast("Header OD  must be greater than branch Id ");
        return false;
      }
    }

    return true; 
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateBranchInput(selectedType, Branch)) return;

    const ans = calculateEqualBranch(centerLine, selectedType, Branch);
    setResult(ans);
  };

  useEffect(() => {
    handleClear();
  }, [selectedType]);

  return (
    <Container>
      <GlobalStyle />
      <Heading style={{ marginTop: "2em" }}>Un-Equal Branch Calculator</Heading>

      <ImageContainer>
        <StyledImage src={unequalBranchImg} alt="equal branch" loading="lazy" />
        {result?.cl && (
          <InfoBox>
            <p>
              Center Line : <strong>{result?.cl} </strong>
            </p>
            <p>
              90 : <strong>{result["90.00"]} mm</strong>
            </p>
            {result["22.50"] && (
              <p>
                67.5 : <strong>{result["67.50"]}mm</strong>
              </p>
            )}
            <p>
              45 : <strong>{result["45.00"]}mm</strong>
            </p>
            {result["22.50"] && (
              <p>
                22.5 : <strong>{result["22.50"]}mm</strong>
              </p>
            )}
          </InfoBox>
        )}
      </ImageContainer>

      <CheckboxGroup role="group" aria-labelledby="type-label">
        <label id="type-label">Select Formula Type:</label>
        <CheckboxLabel>
          <input
            type="checkbox"
            checked={selectedType === "unEqlOldFormula"}
            onChange={() => setSelectedType("unEqlOldFormula")}
          />
          Branch OD * Branch OD / Header OD *4{" "}
        </CheckboxLabel>
        <CheckboxLabel>
          <input
            type="checkbox"
            checked={selectedType === "unEqlNewFormula"}
            onChange={() => setSelectedType("unEqlNewFormula")}
          />
          Header Half OD – √(Header Half OD² – ( Sin(∅) × Branch Half ID)²)
        </CheckboxLabel>
      </CheckboxGroup>
      <FormWrapper style={{maxWidth:"99%"}}>
        <InputGroup>
          <Label htmlFor="HeaderOd">Header OD</Label>
          <StyledInput
            type="number"
            name="HeaderOd"
            step="any"
            placeholder="Enter Header OD"
            value={isNaN(Branch.HeaderOd) ? "" : Branch.HeaderOd}
            onChange={handleInputChange}
            min="0"
            required
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="branchOd">
            {selectedType === "unEqlOldFormula" ? "Branch OD" : "Branch ID"}
          </Label>
          <StyledInput
            type="number"
            name="branchOd"
            step="any"
            placeholder={
              selectedType === "unEqlOldFormula"
                ? "Enter Branch OD"
                : " Enter Branch ID"
            }
            value={isNaN(Branch.branchOd) ? "" : Branch.branchOd}
            onChange={handleInputChange}
            min="0"
            required
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

        <Button variant="secondary" size="medium" onClick={() => {}}>
          Read more
        </Button>
      </FormWrapper>
    </Container>
  );
};
