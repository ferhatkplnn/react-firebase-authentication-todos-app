import { useState } from "react";
import Input from "../shared/Input";
import { addTodoToFirebase } from "../../firebase/actions/todoActions";

const AddTodoForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content || !title) return;
    try {
      await addTodoToFirebase({
        title,
        content,
        completed: false,
        createdAt: Date.now(),
      });
      setContent("");
      setTitle("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Write your title..."
          className="h-12 !text-lg "
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className=" p-2 h-40 outline-none ring-1 ring-slate-300 ring-inset focus:ring-2 focus:ring-sky-400 dark:focus:ring-sky-400 dark:bg-slate-800 dark:ring-gray-600"
          placeholder="Write your content..."
        ></textarea>
        <button
          type="submit"
          className="border-none outline-none rounded px-2 py-1 bg-orange-600 text-white hover:bg-orange-400 duration-300 "
        >
          Add
        </button>
      </form>
    </>
  );
};

export default AddTodoForm;
