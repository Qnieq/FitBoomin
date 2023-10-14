import { createSlice} from "@reduxjs/toolkit";
import { getPlans } from "./planInfo.actions";

export const planSlice = createSlice({
    name: "plans",
    initialState: {
      isLoading: false,
      error: null,
      plan: []
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getPlans.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getPlans.fulfilled, (state, action) => {
          state.isLoading = false;
          state.plan = action.payload;
        })
        .addCase(getPlans.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload.error;
          state.plan = [];
        });
    }
  });