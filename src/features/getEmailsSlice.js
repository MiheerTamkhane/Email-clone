import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  emails: [],
  isLoading: true,
  error: null,
  totalEmails: 0,
};

const getAllEmails = createAsyncThunk("emails/getAllEmails", async () => {
  const { data } = await axios.get("https://flipkart-email-mock.now.sh/");
  return data;
});

const postsSlice = createSlice({
  name: "emails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllEmails.fulfilled, (state, action) => {
      state.emails = [...action.payload.list];
      state.totalEmails = action.payload.total;
      state.isLoading = false;
    });
    builder.addCase(getAllEmails.rejected, (state, action) => {
      state.error = action.payload.message;
    });
  },
});

export const allEmailsReducer = postsSlice.reducer;
export { getAllEmails };
