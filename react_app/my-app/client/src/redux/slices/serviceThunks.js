import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getServicesThunk = createAsyncThunk('services/getServices', async () => {
  const { data } = await axios(`http://localhost:7070/api/services`);
  return data;
});

export const getItemThunk = createAsyncThunk(
  "services/getService",
  async (id) => {
    const { data } = await axios(`http://localhost:7070/api/services/${id} `);
    console.log(data);
    return data;

  });


