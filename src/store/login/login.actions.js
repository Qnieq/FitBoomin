import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAuthUsers = createAsyncThunk(
  "users/get",
  async (id) => {
    const resp = await axios.get(`https://fitboomin--mishaoson.repl.co/users/${id}`);

    return resp.data
  }
);
