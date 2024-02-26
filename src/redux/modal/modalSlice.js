import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    name: false,
    data: false,
  },
  reducers: {
    openModal: (state, action) => {
      state.name = action.payload?.name;
      state.data = action.payload?.data || false;
    },
    closeModal: (state) => {
      state.name = false;
      state.data = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
