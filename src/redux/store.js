import { configureStore } from "@reduxjs/toolkit";
import storiesReducer from "./stories/storiesSlice"

export const store = configureStore({
      reducer: {
          stories:  storiesReducer,
      }
   
})