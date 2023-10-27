import React, { useContext, useEffect, useState } from "react";
import SelectOption from "../../molecules/SelectOpton";
import { AppContext } from "../../context";
import BasicButton from "../../atoms/BasicButton";

const TodoDelete = ({ state, deleteTodo, selectTodo, setSelectTodo }) => {
  // const { deleteTodo, state } = useContext(AppContext);
  const { todos } = state;
  // const [selectTodo, setSelectTodo] = useState(null);

  const handleChange = (event) => {
    setSelectTodo(event.target.value);
  };

  const handleDelete = () => {
    deleteTodo(selectTodo);
  };

  return (
    <div>
      <SelectOption
        title="追加済みリスト"
        options={todos}
        onChange={handleChange}
      />
      <BasicButton label="削除" onClick={handleDelete} />
    </div>
  );
};

export default TodoDelete;
