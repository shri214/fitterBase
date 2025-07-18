import type { TriangleInput } from "../Interfaces/interface";

export const PythagorasCal = (
  triangle: TriangleInput
): TriangleInput | string => {
  let { sideA: a, sideB: b, sideC: c } = triangle;

  // If two sides are provided, calculate the third
  if (a === 0 && b > 0 && c > 0) {
    const aCalc = Math.sqrt(c ** 2 - b ** 2);
    if (isNaN(aCalc)) return "Invalid input: c² must be ≥ b²";
    a = parseFloat(aCalc.toFixed(2));
  } else if (b === 0 && a > 0 && c > 0) {
    const bCalc = Math.sqrt(c ** 2 - a ** 2);
    if (isNaN(bCalc)) return "Invalid input: c² must be ≥ a²";
    b = parseFloat(bCalc.toFixed(2));
  } else if (c === 0 && a > 0 && b > 0) {
    c = parseFloat(Math.sqrt(a ** 2 + b ** 2).toFixed(2));
  } else {
    return "Please provide exactly 2 non-zero values to calculate the third side.";
  }

  return {
    ...triangle,
    sideA: a,
    sideB: b,
    sideC: c,
  };
};
