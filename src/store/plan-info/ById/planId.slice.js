import { createSlice} from "@reduxjs/toolkit";
import { getPlansById } from "../planInfo.actions";

export const planIdSlice = createSlice({
    name: "plansId",
    initialState: {
      isLoading: false,
      error: null,
      planId: []
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getPlansById.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getPlansById.fulfilled, (state, action) => {
          state.isLoading = false;
          state.planId = action.payload;
        })
        .addCase(getPlansById.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload.error;
          state.planId = [];
        });
    }
  });