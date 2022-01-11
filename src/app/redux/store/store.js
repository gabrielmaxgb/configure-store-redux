import { configureStore } from "@reduxjs/toolkit";
import { dummyReducer } from "../dummyReducer";

export const store = configureStore({
  reducer: {dummy: dummyReducer}
})