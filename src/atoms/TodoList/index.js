import React from "react";

const TodoList = ({ list }) => {
  return (
    <ol>
      {list.map((item) => {
        return <li>{item.value}</li>;
      })}
    </ol>
  );
};

export default TodoList;
