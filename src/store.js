import { configureStore } from "@reduxjs/toolkit";

import { allEmailsReducer, filterReducer } from "./features";
const store = configureStore({
  reducer: {
    allEmails: allEmailsReducer,
    allFilters: filterReducer,
  },
});

export { store };
