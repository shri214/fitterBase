import type { IBranch, IEqualRes } from "../Interfaces/interface";

export const calculateLateralBranch = (
  centerLine: number,
  degree: number,
  branch: IBranch
): IEqualRes | null => {
  const angleStep = 360 / centerLine;
  const angles: number[] = [];
  let currentAngle = 0;

  while (currentAngle <= 180) {
    if (currentAngle > 0) {
      angles.push(Number(currentAngle.toFixed(2)));
    }
    currentAngle += angleStep;
  }

  const headerHalfOD = branch.HeaderOd / 2;
  const branchHalfID = branch.branchOd / 2;

  const toRadians = (deg: number) => (deg * Math.PI) / 180;
  const sinDegree = Math.sin(toRadians(degree));
  const tanDegree = Math.tan(toRadians(degree));

  const response: IEqualRes = {
    cl: String(centerLine),
    "45.00": 0,
    "90.00": 0,
  };

  if (sinDegree === 0 || tanDegree === 0) {
    return null; // Avoid divide by zero
  }

  angles.forEach((deg) => {
    const rad = toRadians(deg);
    const sinAngle = Math.sin(rad);
    const cosAngle = Math.cos(rad);

    const underRoot = headerHalfOD ** 2 - (sinAngle * branchHalfID) ** 2;
    if (underRoot < 0) return; // Invalid geometry

    const firstPart = (headerHalfOD - Math.sqrt(underRoot)) / sinDegree;
    const secondPart = (branchHalfID * (1 - cosAngle)) / tanDegree;

    const value = Number((firstPart + secondPart).toFixed(2));
    const key = deg.toFixed(2);

    if (["22.50", "45.00", "67.50", "90.00", "112.50", "135.00", "157.50", "180.00"].includes(key)) {
      response[key] = value;
    }
  });

  return response;
};
