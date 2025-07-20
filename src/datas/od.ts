export const od: Record<string, number> = {
  "0.5": 21,
  "0.75": 27,
  "1": 33,
  "1.5": 48,
  "2": 60,
  "2.5": 73,
  "3": 89,
  "4": 114,
  "5": 141,
  "6": 168,
  "8": 219,
  "10": 273,
  "12": 324,
};

export const getOuterDiameter = (elbowSize: number): number => {
  const asStr = elbowSize.toString();

  if (od[asStr]) {
    return od[asStr];
  }

  if (elbowSize > 12 && elbowSize % 2 === 0) {
    return elbowSize * 25.4;
  }

  throw new Error(`Unsupported size: ${elbowSize}`);
};
