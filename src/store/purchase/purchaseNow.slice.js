import { createSlice } from "@reduxjs/toolkit";

export const purchaseNowSlice = createSlice({
  name: "purchaseNow",
  initialState: [],
  reducers: {
    togglePurchaseNow: (state, { payload: purchase}) => {
      if(state.length == 1)
        state.splice(0)
      state.push(purchase);
      
    }
  }
});
export const { actions, reducer } = purchaseNowSlice;