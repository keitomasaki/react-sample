import React, { useContext, useState } from "react";
import TodoContentForm from "../../organisms/TodoContentForm";
import TodoDelete from "../../organisms/TodoDelete";
import { AppContext } from "../../context";

const Todo = () => {
  const { setTodo, deleteTodo, state } = useContext(AppContext);
  const [text, setText] = useState("");
  const [selectTodo, setSelectTodo] = useState(null);

  return (
    <>
      <TodoContentForm
        state={state}
        setTodo={setTodo}
        text={text}
        setText={setText}
      />
      <TodoDelete
        state={state}
        selectTodo={selectTodo}
        setSelectTodo={setSelectTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
};

export default Todo;
