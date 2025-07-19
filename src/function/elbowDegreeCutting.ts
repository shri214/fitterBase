import { getOuterDiameter } from "../datas/od";
import type { FormData } from "../Interfaces/interface";

export const calculateRadii = (formData: FormData ,center:number) => {
  const { cutDegree=0, unit, elbowSize } = formData;

  // Convert to nearest inch
  const sizeInInches =
    unit === "mm" ? Math.round(elbowSize / 25.4) : Math.round(elbowSize);

  try {
    const od = getOuterDiameter(sizeInInches);

    
    const r1 = parseFloat(
      (((center * 2 * Math.PI) / 360) * cutDegree).toFixed(2)
    );

    const r2 = parseFloat(
      (center * 2 - ((od * Math.PI) / 360) * cutDegree).toFixed(2)
    );

    const r3 = parseFloat(
      (center * 2 + ((od * Math.PI) / 360) * cutDegree).toFixed(2)
    );

    return { r1, r2, r3 };
  } catch (err: any) {
    console.error(err.message);
    return null;
  }
};
