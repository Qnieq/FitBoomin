import { createSlice } from "@reduxjs/toolkit";
import { getAuthUsers } from "./login.actions";

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        password: "",
        email: false,
        auth: false,
        isLoading: false,
        error: "",
    },
    reducers: {
        addAuthPassword: (state, {payload: authPassword}) => {
            state.password = authPassword
        }, 
        removeAuth: (state) => {
            state.auth = false;
            state.email = false;
            state.password = "";
            state.error = "";
        },
        updateError: (state) => {
            state.error = "";
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(getAuthUsers.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getAuthUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.email = true;
            if (action.payload.password === state.password) {
                state.auth = true;
            } else {
                state.error = "not found";
            }
          })
          .addCase(getAuthUsers.rejected, (state) => {
            state.isLoading = false;
            state.auth = false;
            state.email = false;
            state.password = "";
            state.error = "not found";
          });
      }
})

export const { actions, reducer } = loginSlice