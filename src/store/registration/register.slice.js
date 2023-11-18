import { createSlice } from "@reduxjs/toolkit";
import { sendUsers } from "./register.actions";
import { getAuthUsers } from "../login/login.actions";

export const registerSlice = createSlice({
    name: "register",
    initialState: {
        isExist: false,
        email: "",
        password: "",
        isLoading: false,
        error: "",
    },
    reducers: {
        addEmail: (state, {payload: email}) => {
            state.email = email;
            state.isExist = false
        },
        addPassword: (state, {payload: password}) => {
            state.password = password;
        },
        logoutUser: (state) => {
            state.email = ""
            state.password = ""
            state.isExist = false
        },
        removeIsExist: (state) => {
            state.isExist = false
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(sendUsers.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(sendUsers.fulfilled, (state) => {
            state.isLoading = false;
          })
          .addCase(getAuthUsers.fulfilled, (state) => {
            state.isExist = "exist";
          })
          .addCase(getAuthUsers.rejected, (state) => {
            state.isExist = "not exist";
          })
          .addCase(sendUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload.error;
          });
      }
});

export const { actions, reducer } = registerSlice