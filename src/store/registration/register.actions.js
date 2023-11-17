import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendUsers = createAsyncThunk(
  "users/send",
  async (user) => {
    const resp = await axios.post('https://fitboomin--mishaoson.repl.co/users', user);
    console.log(resp.data);
    return resp.data
  }
);