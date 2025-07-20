import { getOuterDiameter } from "../datas/od";

export const calculateMitterValues = (pipeSize: number, degree: number) => {
  const od = getOuterDiameter(pipeSize); // You already have this function

  const rad = (deg: number) => (deg * Math.PI) / 180;

  const lcb = Math.tan(rad(degree / 2)) * (od / 2);
  const scb = Math.sin(rad(45)) * lcb;

  return {
    lcb: parseFloat(lcb.toFixed(2)),
    scb: parseFloat(scb.toFixed(2)),
  };
};
