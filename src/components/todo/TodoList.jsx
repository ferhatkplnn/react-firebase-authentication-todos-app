import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { auth, db } from "../../firebase/config/firebase";
import ListItem from "./ListItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [parent, enableAnimations] = useAutoAnimate();

  useEffect(() => {
    const whereForQuery = {
      all: [],
      active: where("completed", "==", false),
      completed: where("completed", "==", true),
    };

    const todoCollection = collection(
      db,
      "users",
      auth.currentUser.uid,
      "todos"
    );

    const q = query(
      todoCollection,
      whereForQuery[filterStatus],
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todosArr = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setTodos(todosArr);
    });

    return () => unsubscribe();
  }, [filterStatus]);

  return (
    <div className="border mt-20 p-8 border-slate-300 dark:border-slate-700">
      <div className="space-x-2 text-slate-400 dark:text-slate-500">
        {["completed", "active", "all"].map((btn) => (
          <button
            key={btn}
            onClick={() => setFilterStatus(btn)}
            className={`capitalize hover:text-slate-800 dark:hover:text-slate-200 duration-300 ${
              filterStatus === btn ? "text-slate-800 dark:text-slate-100" : ""
            }`}
          >
            {btn}
          </button>
        ))}
      </div>
      <div className="space-y-2" ref={parent}>
        {todos.map(({ completed, title, content, id, createdAt }) => {
          return (
            <ListItem
              completed={completed}
              content={content}
              title={title}
              key={id}
              id={id}
              createdAt={createdAt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
