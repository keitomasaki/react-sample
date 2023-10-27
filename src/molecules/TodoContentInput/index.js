import React from "react";
import WatchCounter from "../../atoms/WatchCounter";
import BasicTextArea from "../../atoms/BasicTextArea";

const TodoContentInput = ({ text, setter }) => {
  const max = 10;

  const handleChange = (event) => {
    setter(event.target.value);
  };

  return (
    <div>
      <BasicTextArea max={max} text={text} onChange={handleChange} />
      <WatchCounter max={max} text={text} />
    </div>
  );
};

export default TodoContentInput;
