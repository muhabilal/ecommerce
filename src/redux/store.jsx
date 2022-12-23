import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "../redux/webSlice";
export const store = configureStore({
  reducer: {
    data: accountReducer,
  },
});
