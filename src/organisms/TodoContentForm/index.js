import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import TodoContentInput from "../../molecules/TodoContentInput";
import BasicButton from "../../atoms/BasicButton";
import TodoList from "../../atoms/TodoList";

const TodoContentForm = ({ setTodo, state, text, setText }) => {
  // const { setTodo, state } = useContext(AppContext);
  const { todos } = state;
  // const [text, setText] = useState("");

  const handleClick = () => {
    setTodo(text);
  };

  return (
    <div>
      <TodoContentInput text={text} setter={setText} />
      <BasicButton label="登録" onClick={handleClick} />
      <TodoList list={todos} />
    </div>
  );
};

export default TodoContentForm;
