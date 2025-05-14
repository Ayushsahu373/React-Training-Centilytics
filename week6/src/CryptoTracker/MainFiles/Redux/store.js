import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "./CoinSlice";

export const store = configureStore({
  reducer: {
    coin: coinReducer,
  },
});
