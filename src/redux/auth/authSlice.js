import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: true,
  },
  reducers: {
    login: (state, action) => {
      const { email, displayName, photoURL } = action.payload;
      state.user = { email, displayName, photoURL };
    },
    logout: (state) => {
      state.user = null;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { login, logout, setIsLoading } = authSlice.actions;

export default authSlice.reducer;
