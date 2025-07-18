import type { TriangleInput } from "../Interfaces/interface";

export const TanInverse = (triangle: TriangleInput): TriangleInput => {
  let { angleAlpha: angleA, angleBeta: angleB } = triangle;
  const {sideA: a, sideB: b,}=triangle;
  const angleRadiansA = Math.atan2(b, a);
  angleA = angleRadiansA * (180 / Math.PI);
  const angleRadiansB = Math.atan2(a, b);
  angleB = angleRadiansB * (180 / Math.PI);
  console.log(angleRadiansA, "and ", angleA);
  return {
    ...triangle,
    angleAlpha: parseFloat(angleA.toFixed(2)),
    angleBeta: parseFloat(angleB.toFixed(2)),
  };
};
