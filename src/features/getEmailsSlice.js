import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  emails: [],
  singleEmail: {},
  emailLoader: true,
  isLoading: true,
  error: null,
  totalEmails: 0,
};

const getAllEmails = createAsyncThunk(
  "emails/getAllEmails",
  async (pageNo = 1) => {
    const { data } = await axios.get(
      `https://flipkart-email-mock.now.sh/?page=${pageNo}`
    );
    return data;
  }
);

const getSingleEmail = createAsyncThunk(
  "emails/singleEmail",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://flipkart-email-mock.now.sh/?id=${id}`
      );
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const postsSlice = createSlice({
  name: "emails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllEmails.fulfilled, (state, { payload }) => {
      state.emails = [...payload.list];
      state.totalEmails = payload.total;
      state.isLoading = false;
    });
    builder.addCase(getAllEmails.rejected, (state, { payload }) => {
      state.error = payload.message;
    });

    builder.addCase(getSingleEmail.fulfilled, (state, { payload }) => {
      state.singleEmail = payload;
      state.emailLoader = false;
    });
  },
});

export const allEmailsReducer = postsSlice.reducer;
export { getAllEmails, getSingleEmail };
