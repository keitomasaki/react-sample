import React from "react";

const Combobox = ({ children, onChange }) => {
  return <select onChange={onChange}>{children}</select>;
};

export default Combobox;
