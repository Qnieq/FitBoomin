import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPlans = createAsyncThunk(
  "plans/get",
  async () => {
    const response = await axios.get('https://e950bb45-80e2-4f5f-94c9-a698ea4952bf-00-2t6ee8m0q1zkz.riker.replit.dev/plans');

    return response.data;
  }
);
export const getPlansById = createAsyncThunk(
  "plans/get-by-id",
  async (id) => {
    const response = await axios.get(`https://e950bb45-80e2-4f5f-94c9-a698ea4952bf-00-2t6ee8m0q1zkz.riker.replit.dev/plans/${id}`);

    return response.data;
  }
);
