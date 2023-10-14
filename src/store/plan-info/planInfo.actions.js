import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPlans = createAsyncThunk(
  "plans/get",
  async () => {
    const response = await axios.get('https://fitboomin--mishaoson.repl.co/plans');

    return response.data;
  }
);
export const getPlansById = createAsyncThunk(
  "plans/get-by-id",
  async (id) => {
    const response = await axios.get(`https://fitboomin--mishaoson.repl.co/plans/${id}`);

    return response.data;
  }
);
