import { useState } from "react";
import {
  deleteTodoToFirebase,
  updateTodoToFirebase,
} from "../../firebase/actions/todoActions";
import TodoDetail from "./TaskDetail";
import TodoEdit from "./TodoEdit";

const ListItem = ({ title, content, completed, id, createdAt }) => {
  const [isShow, setIsShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(title);
  const [textArea, setTextArea] = useState(content);
  const [isCompleted, setIsCompleted] = useState(completed);

  const handleClick = () => {
    setIsShow(!isShow);
  };

  const handleUpdate = () => {
    updateTodoToFirebase(id, {
      title: text,
      content: textArea,
      completed: isCompleted,
    });
    setIsEdit(false);
    setIsShow(true);
  };

  const handleCompletedChange = () => {
    setIsCompleted(!isCompleted);
    updateTodoToFirebase(id, { completed: !isCompleted });
  };

  const handleDelete = () => {
    deleteTodoToFirebase(id);
  };

  const handleBackClick = () => {
    setIsEdit(false);
    setIsShow(true);
  };

  const handleEditClick = () => {
    setIsEdit(true);
    setIsShow(false);
  };

  return (
    <>
      {!isEdit && (
        <TodoDetail
          createdAt={createdAt}
          handleClick={handleClick}
          handleCompletedChange={handleCompletedChange}
          handleDelete={handleDelete}
          handleEditClick={handleEditClick}
          isCompleted={isCompleted}
          text={text}
          isShow={isShow}
          textArea={textArea}
        />
      )}

      {isEdit && (
        <TodoEdit
          handleBackClick={handleBackClick}
          handleCompletedChange={handleCompletedChange}
          handleUpdate={handleUpdate}
          isCompleted={isCompleted}
          setText={setText}
          setTextArea={setTextArea}
          text={text}
          textArea={textArea}
        />
      )}
    </>
  );
};

export default ListItem;
