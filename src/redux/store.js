import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import modalSlice from "./modal/modalSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    modal: modalSlice,
  },
});
