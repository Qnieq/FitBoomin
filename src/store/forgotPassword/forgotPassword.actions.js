import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updatePassword = createAsyncThunk(
    "password/update",
    async (id) => {
        console.log(id);
      const resp = await axios.put(`https://fitboomin--mishaoson.repl.co/users/${id[0]}`, {
        id: id[0],
        email: id[0],
        password: id[1]
      });
  
      return resp.data
    }
  );