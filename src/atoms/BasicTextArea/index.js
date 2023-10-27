import React from "react";

const BasicTextArea = ({ text, max, onChange }) => {
  return <input type="text" maxlength={max} value={text} onChange={onChange} />;
};

export default BasicTextArea;
