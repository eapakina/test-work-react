import { createSlice } from "@reduxjs/toolkit";
import { getInfoThunk, getItemThunk, getServicesThunk } from "./serviceThunks";

const initialState= {
  data:[],
  loading: false,
  error: null, 
}

;

export const serviceSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(
      getServicesThunk.pending, (state) => {
      state.loading = true;
      state.error = null;})
    .addCase(
      getServicesThunk.fulfilled,
      (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
    .addCase(getServicesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getItemThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getItemThunk.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getItemThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  
});



export default serviceSlice.reducer;
