import { createReducer } from "@reduxjs/toolkit";
import { addBook, deleteBook } from "../actions/bookActions";

const INITIAL_STATE = {
  books: []
};

const bookReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
  .addCase(addBook, (state, action) => {
    state.books.push(action.payload);
  })
  .addCase(deleteBook, (state, action) => {
    state.books = state.books.filter(book => book.id !== action.payload.id)
  })
});

export default bookReducer;