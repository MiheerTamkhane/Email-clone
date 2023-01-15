import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  byStatus: JSON.parse(localStorage.getItem("by_status")) || [],
  byFavorite: JSON.parse(localStorage.getItem("by_favorite")) || [],
  currentEmail: JSON.parse(localStorage.getItem("current_email")) || {},
  filterStatus: JSON.parse(localStorage.getItem("filter_status")) || "",
};

const filterSlice = createSlice({
  name: "emailFilters",
  initialState,
  reducers: {
    filterByStatus: (state, { payload }) => {
      state.byStatus = state.byStatus?.includes(payload)
        ? state.byStatus
        : [...state.byStatus, payload];
    },
    filterByFavorite: (state, { payload }) => {
      state.byFavorite = state.byFavorite.includes(payload)
        ? state.byFavorite
        : [...state.byFavorite, payload];
    },
    removeFromFavorite: (state, { payload }) => {
      state.byFavorite = state.byFavorite.includes(payload)
        ? state.byFavorite.filter((item) => item !== payload)
        : [...state.byFavorite, payload];
    },
    addCurrentEmailToCanvas: (state, { payload }) => {
      state.currentEmail = { ...state.currentEmail, ...payload };
    },
    sortByFilterStatus: (state, { payload }) => {
      state.filterStatus = payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const {
  filterByStatus,
  sortByFilterStatus,
  filterByFavorite,
  addCurrentEmailToCanvas,
  removeFromFavorite,
} = filterSlice.actions;
