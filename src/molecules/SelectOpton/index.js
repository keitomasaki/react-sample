import React from "react";
import Combobox from "../Combobox";

const SelectOption = ({ title, options, onChange }) => {
  return (
    <div>
      <label>{title}</label>
      <Combobox onChange={onChange}>
        <option key={0} value={0}>
          削除対象を選択してください
        </option>
        {options.map(({ id, value }) => (
          <option key={id} value={id}>
            {value}
          </option>
        ))}
      </Combobox>
    </div>
  );
};

export default SelectOption;
