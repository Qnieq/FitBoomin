import { createSlice } from "@reduxjs/toolkit";
import { sendUsers } from "./register.actions";

export const registerSlice = createSlice({
    name: "register",
    initialState: {
        email: "",
        password: "",
        isLoading: false,
        error: "",
    },
    reducers: {
        addEmail: (state, {payload: email}) => {
            state.email = email;
        },
        addPassword: (state, {payload: password}) => {
            state.password = password;
        },
        logoutUser: (state) => {
            state.email = ""
            state.password = ""
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(sendUsers.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(sendUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
          })
          .addCase(sendUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload.error;
            state.user = [];
          });
      }
});

export const { actions, reducer } = registerSlice