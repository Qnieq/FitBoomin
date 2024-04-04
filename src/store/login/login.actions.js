import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAuthUsers = createAsyncThunk(
  "users/get",
  async (id) => {
    const resp = await axios.get(`https://e950bb45-80e2-4f5f-94c9-a698ea4952bf-00-2t6ee8m0q1zkz.riker.replit.dev/users/${id}`);

    return resp.data
  }
);
