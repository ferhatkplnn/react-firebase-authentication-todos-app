import Input from "../shared/Input";

const TodoEdit = ({
  text,
  textArea,
  isCompleted,
  handleBackClick,
  handleCompletedChange,
  handleUpdate,
  setText,
  setTextArea,
}) => {
  return (
    <div>
      <div className={`flex flex-col overflow-hidden`}>
        <div className="relative flex">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={handleCompletedChange}
            className="absolute left-0 top-3"
          />
          <Input
            className="pl-5 !text-base bg-slate-100"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <textarea
          value={textArea}
          onChange={(e) => setTextArea(e.target.value)}
          className="bg-slate-100 p-2 h-40 outline-none ring-1 ring-slate-300 ring-inset focus:ring-2 focus:ring-sky-400 dark:focus:ring-sky-400 dark:bg-slate-800 dark:ring-gray-600"
          placeholder="Write your content..."
        ></textarea>
        <div className="flex justify-end space-x-1 mt-1">
          <button
            onClick={handleBackClick}
            className="px-2 py-1 bg-slate-600 hover:bg-slate-400 duration-150 text-slate-100"
          >
            Back
          </button>
          <button
            onClick={handleUpdate}
            className="px-2 py-1 bg-green-600 hover:bg-green-400 duration-150 text-slate-100"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoEdit;
