import moment from "moment";

const TodoDetail = ({
  text,
  createdAt,
  isCompleted,
  handleClick,
  handleCompletedChange,
  handleEditClick,
  handleDelete,
  isShow,
  textArea,
}) => {
  return (
    <div className="divide-y divide-slate-600">
      <div className="flex items-center space-x-2 h-9 hover:bg-slate-300 dark:hover:bg-slate-800 duration-300 ">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleCompletedChange}
        />
        <div
          className={`flex-1 flex justify-between  cursor-pointer h-6 ${
            isCompleted ? "text-slate-400 dark:text-slate-700 line-through" : ""
          } duration-500`}
          onClick={handleClick}
        >
          <p>{text}</p>
          <span className="text-sm text-slate-400 font-light italic">
            {moment(createdAt).fromNow()}
          </span>
        </div>
      </div>
      <div>
        <div
          className={`flex flex-col overflow-hidden  ${
            isShow ? "h-48" : "h-0"
          } duration-500`}
        >
          <div className=" p-2 h-40 outline-none   focus:ring-sky-400  dark:bg-slate-800 dark:ring-gray-600 bg-slate-100">
            {textArea}
          </div>
          <div className="flex justify-end space-x-1 mt-1">
            <button
              onClick={handleEditClick}
              className="px-2 py-1 bg-sky-600 hover:bg-sky-400 duration-150 text-slate-100"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="px-2 py-1 bg-red-600 hover:bg-red-400 duration-150 text-slate-100"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoDetail;
