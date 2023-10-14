import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: []
  },
  reducers: {
    toggleCart: (state, { payload: plan }) => {
      state.cartItems.push(plan);
      console.log(state.cartItems)
    },
    DeleteFromCart: (state, { payload: plan }) => {
      const isExists = state.some((r) => r[0].id === plan[0][0].id);
      console.log(plan, isExists);
      // if (isExists) {
      //   const index = state.findIndex((item) => item[0].id === plan[0][0].id);
      //   if (index !== -1) {
      //     state.splice(index, 1);
      //   }
      // } else state.push(plan);
    }
  }
});

export const { actions, reducer } = cartSlice;