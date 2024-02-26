import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-3xl font-bold text-center p-4">Todo</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
};

export default Todo;
