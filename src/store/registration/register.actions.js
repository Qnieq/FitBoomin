import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendUsers = createAsyncThunk(
  "users/send",
  async (user) => {
    const resp = await axios.post('https://e950bb45-80e2-4f5f-94c9-a698ea4952bf-00-2t6ee8m0q1zkz.riker.replit.dev/users', user);
    console.log(resp.data);
    return resp.data
  }
);