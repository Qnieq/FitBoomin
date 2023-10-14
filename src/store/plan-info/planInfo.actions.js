import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPlans = createAsyncThunk(
  "plans/get",
  async () => {
    const response = await axios.get('http://localhost:3000/plans');
    console.log(response.data)
    return response.data;
  }
);
export const getPlansById = createAsyncThunk(
  "plans/get-by-id",
  async (id) => {
    const response = await axios.get(`http://localhost:3000/plans/${id}`);
    console.log(response.data)
    return response.data;
  }
);
