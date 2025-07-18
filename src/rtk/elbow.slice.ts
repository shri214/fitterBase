// src/store/elbowSlice.ts
import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { ElbowState, FormData } from "../Interfaces/interface";


const initialState: ElbowState = {
  data: {
    type: "standard",
    dimension: "2d",
    elbowSize: 0,
    unit: "mm",
    degree: 0,
  },
};

const elbowSlice = createSlice({
  name: "elbow",
  initialState,
  reducers: {
    setElbowData: (state, action: PayloadAction<FormData>) => {
      state.data = action.payload;
    },
    clearElbowData: (state) => {
      state.data = initialState.data;
    },
  },
});

export const { setElbowData, clearElbowData } = elbowSlice.actions;
export default elbowSlice.reducer;
