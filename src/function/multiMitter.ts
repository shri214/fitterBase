// utility.ts

import { getOuterDiameter } from "../datas/od";

export interface MitterInput {
  pipeSize: number;
  degree: number;
  radiusType: "short" | "standard" | "long";
  numCuts: number;
}

export interface MitterResult {
  cutBack: number;
  longCut: number;
}

const getRadiusValue = (radiusType: "short" | "standard" | "long"): number => {
  switch (radiusType) {
    case "short":
      return 4;
    case "standard":
      return 6;
    case "long":
      return 8;
    default:
      throw new Error("Invalid radius type");
  }
};

export const calculateMitterCuts = ({
  pipeSize,
  degree,
  radiusType,
  numCuts,
}: MitterInput): MitterResult => {
  if (pipeSize <= 0 || degree <= 0 || numCuts <= 0) {
    throw new Error("All inputs must be greater than 0");
  }

  const od = getOuterDiameter(pipeSize);
  const cf = od * 3.142;
  const cutBack = (cf * degree) / (360 * numCuts * 2);
  const radius = getRadiusValue(radiusType);
  const longCut = radius * cutBack;

  return {
    cutBack: parseFloat(cutBack.toFixed(2)),
    longCut: parseFloat(longCut.toFixed(2)),
  };
};
