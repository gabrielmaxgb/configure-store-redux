import { configureStore } from "@reduxjs/toolkit";
// import bookReducer from "../reducers/bookReducer";
import bookReducer from "../slices/bookSlice";

export const store = configureStore({
  reducer: { books: bookReducer }
})