import { createSlice } from "@reduxjs/toolkit";


export const registerSlice = createSlice({
    name: "registration",
    initialState: {
        email: "",
        password: "",
    },
    reducers: {
        addEmail: (state, {payload: email}) => {
            state.email = email;
        },
        addPassword: (state, {payload: password}) => {
            state.password = password;
        }
    }
});

export const { actions, reducer } = registerSlice