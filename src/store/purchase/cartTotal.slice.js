import { createSlice } from "@reduxjs/toolkit";

export const cartTotalSlice = createSlice({
  name: "cartTotal",
  initialState: [],
  reducers: {
    toggleTotalCart: (state, { payload: total }) => {
        const isExists = state.some((r) => r.id === total.id);
        console.log(total.id, isExists, state)
        if (isExists) {
          const index = state.findIndex((item) => item.id  === total[0].id);
          console.log(index)
          if (index !== -1) {
            state.splice(index, 1);
          }
        } else state.push(total);
      }
    }
});

export const { actions, reducer } = cartTotalSlice;