import {
  collection,
  setDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { auth, db } from "../config/firebase";
import toast from "react-hot-toast";
import { handleFirebaseError } from "./errorHandle";

export const addTodoToFirebase = async (data) => {
  try {
    const docRef = doc(collection(db, "users", auth.currentUser.uid, "todos"));

    await setDoc(docRef, { ...data, id: docRef.id });

    toast.success("Todo is added!");
    return true;
  } catch (error) {
    handleFirebaseError(error);
  }
};

export const updateTodoToFirebase = async (id, data) => {
  try {
    const docRef = doc(db, "users", auth.currentUser.uid, "todos", id);
    await updateDoc(docRef, data);
    toast.success("Todo is updated!");
  } catch (error) {
    handleFirebaseError(error);
  }
};

export const deleteTodoToFirebase = async (id) => {
  try {
    await deleteDoc(doc(db, "users", auth.currentUser.uid, "todos", id));
    toast.success("Todo is deleted!");
  } catch (error) {
    handleFirebaseError(error);
  }
};
