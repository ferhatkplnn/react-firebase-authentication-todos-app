import {
  EmailAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../config/firebase";
import toast from "react-hot-toast";
import { store } from "../../redux/store";
import { login, logout, setIsLoading } from "../../redux/auth/authSlice";
import { closeModal, openModal } from "../../redux/modal/modalSlice";
import { handleFirebaseError } from "./errorHandle";

export const registerToFirebase = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    toast.success("You have successfully registered!");

    const { user } = userCredential;
    return user;
  } catch (error) {
    handleFirebaseError(error);
  }
};

export const loginToFirebase = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    toast.success("Accessed!");
    return user;
  } catch (error) {
    handleFirebaseError(error);
  }
};

export const reAuthToFirebase = async (password) => {
  try {
    const credential = EmailAuthProvider.credential(
      auth.currentUser.email,
      password
    );
    const { user } = await reauthenticateWithCredential(
      auth.currentUser,
      credential
    );
    toast.success("You are re authed!");
    store.dispatch(closeModal());
    return user;
  } catch (error) {
    handleFirebaseError(error);
  }
};

export const logoutToFirebase = async () => {
  try {
    await signOut(auth);
    toast.success("Logged out!");
    return true;
  } catch (error) {
    handleFirebaseError(error);
  }
};

export const updateProfileToFirebase = async (data) => {
  try {
    await updateProfile(auth.currentUser, data);
    toast.success("Profile updated!");
  } catch (error) {
    handleFirebaseError(error);
  }
};

export const updatePasswordToFirebase = async (password) => {
  try {
    await updatePassword(auth.currentUser, password);
    toast.success("Password successfully changed!");
  } catch (error) {
    if (error.code === "auth/requires-recent-login") {
      store.dispatch(
        openModal({
          name: "re-auth-modal",
        })
      );
    }
    handleFirebaseError(error);
  }
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    const { displayName, photoURL, email } = user;
    store.dispatch(login({ displayName, photoURL, email }));
    store.dispatch(setIsLoading(false));
    return;
  }

  store.dispatch(logout());
  store.dispatch(setIsLoading(false));
});
