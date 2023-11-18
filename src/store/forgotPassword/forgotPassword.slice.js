import { createSlice } from "@reduxjs/toolkit";
import { getUsersForNewPass, updatePassword } from "./forgotPassword.actions";
import { getAuthUsers } from "../login/login.actions";

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        email: "",
        correct: false,
        isLoading: false,
        error: "",
    },
    reducers: {
        addAuthEmail: (state, {payload: email}) => {
            state.email = email
        },
        removeCorrect: (state) => {
            state.correct = false
        },
        removeEmail: (state) => {
            state.email = ""
        },
        removeAll: (state) => {
          state.email = ""
          state.correct = false
      },
    },
    extraReducers: (builder) => {
        builder
          .addCase(updatePassword.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(updatePassword.fulfilled, (state) => {
            state.isLoading = false;
          })
          .addCase(getUsersForNewPass.fulfilled, (state) => {
            state.correct = "exist";
          })
          .addCase(getUsersForNewPass.rejected, (state) => {
            state.correct = "not exist";
          })
          .addCase(updatePassword.rejected, (state) => {
            state.isLoading = false;
            state.error = "";
          });
      }
})

export const { actions, reducer } = loginSlice