import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
}

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook(state, action) {
      // const { payload } = action;
      state.books.push(action.payload);
    },
    deleteBooks(state, action) {
      console.log(action);
      state.books = state.books.filter(book => book.id !== action.payload.id);
    }
  }
})

console.log(bookSlice.reducer);

export const { addBook, deleteBooks } = bookSlice.actions;
export default bookSlice.reducer;