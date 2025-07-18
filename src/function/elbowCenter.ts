import type { FormData } from "../Interfaces/interface";


export const elbowCenter = (formData: FormData): number => {
  const { degree, dimension, elbowSize, unit } = formData;

  const sizeInInches =
    unit === "mm" ? Math.round(elbowSize / 25.4) : Math.round(elbowSize);

  // Convert degree to radians
  const rad = (degree / 2) * (Math.PI / 180);

  // Get dimension multiplier
  const dimFactor = dimension === "2d" ? 1.5 : 2;

  // Calculate elbow center
  const center = Math.tan(rad) * dimFactor * sizeInInches * 25.4;

  // Return rounded to 2 decimal places
  return parseFloat(center.toFixed(2));
};
