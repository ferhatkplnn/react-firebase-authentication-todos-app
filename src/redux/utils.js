import { login } from "./auth/authSlice";
import { closeModal } from "./modal/modalSlice";
import { store } from "./store";

export const modalClose = () => {
  store.dispatch(closeModal());
};

export const setUserData = (data) => {
  store.dispatch(login(data));
};
