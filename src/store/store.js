import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../modules/Counter'

export const store = configureStore({
  reducer : {
    counter : counterReducer,
  }
})