import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updatePassword = createAsyncThunk(
  "password/update",
  async (id) => {
    const resp = await axios.put(`https://e950bb45-80e2-4f5f-94c9-a698ea4952bf-00-2t6ee8m0q1zkz.riker.replit.dev/users/${id[0]}`, {
      id: id[0],
      email: id[0],
      password: id[1]
    });

    return resp.data
  }
);

export const getUsersForNewPass = createAsyncThunk(
  "users/getForget",
  async (id) => {
    const resp = await axios.get(`https://e950bb45-80e2-4f5f-94c9-a698ea4952bf-00-2t6ee8m0q1zkz.riker.replit.dev/users/${id}`);

    return resp.data
  }
);
