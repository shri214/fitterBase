import type { IBranch, IEqualRes } from "../Interfaces/interface";

export const calculateEqualBranch = (
  centerLine: number,
  selectedType: string,
  branch: IBranch
): IEqualRes | null => {
  const angleStep = 360 / centerLine;
  const angles: number[] = [];
  let currentAngle = 0;

  while (currentAngle <= 90) {
    if (currentAngle > 0) {
      angles.push(Number(currentAngle.toFixed(2)));
    }
    currentAngle += angleStep;
  }
  const response: IEqualRes = {
    cl: String(centerLine),
    "45.00": 0,
    "90.00": 0,
  };

  if (selectedType === "oldFormula") {
    const result = (branch.branchOd * 2) / 5;

    angles.forEach((deg) => {
      const rad = (deg * Math.PI) / 180;
      const value = Number((Math.sin(rad) * result).toFixed(2));
      const key = deg.toFixed(2);
      if (["22.50", "45.00", "67.50", "90.00"].includes(key)) {
        response[key] = value;
      }
    });

    return response;
  } else if (
    selectedType === "newFormula" ||
    selectedType === "unEqlNewFormula"
  ) {
    const headerHalfOD = branch.HeaderOd / 2;
    const branchHalfID = branch.branchOd / 2;

    angles.forEach((deg) => {
      const rad = (deg * Math.PI) / 180;
      const sinComponent = Math.sin(rad) * branchHalfID;
      const underRoot = headerHalfOD ** 2 - sinComponent ** 2;
      const value = Number((headerHalfOD - Math.sqrt(underRoot)).toFixed(2));
      const key = deg.toFixed(2);
      if (["22.50", "45.00", "67.50", "90.00"].includes(key)) {
        response[key] = value;
      }
    });

    return response;
  } else if (selectedType === "unEqlOldFormula") {
    const headerOD = branch.HeaderOd;
    const branchOD = branch.branchOd;

    const result = (branchOD * branchOD) / (headerOD * 4);

    angles.forEach((deg) => {
      const rad = (deg * Math.PI) / 180;
      const value = Number((Math.sin(rad) * result).toFixed(2));
      const key = deg.toFixed(2);
      if (["22.50", "45.00", "67.50", "90.00"].includes(key)) {
        response[key] = value;
      }
    });

    return response;
  }

  return null;
};
