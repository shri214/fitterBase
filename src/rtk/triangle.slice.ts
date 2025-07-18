import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { TriangleInput } from "../Interfaces/interface";

const initialState: TriangleInput = {
  sideA: 0,
  sideB: 0,
  sideC: 0,
  angleAlpha: 0,
  angleBeta: 0,
};

const triangleSlice = createSlice({
  name: "triangle",
  initialState,
  reducers: {
    setTriangles: (state, action: PayloadAction<Partial<TriangleInput>>) => {
      return { ...state, ...action.payload };
    },
    resetTriangle: () => initialState,
  },
});
export const { setTriangles, resetTriangle } = triangleSlice.actions;
export default triangleSlice.reducer;
