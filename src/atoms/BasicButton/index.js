import React from "react";

const BasicButton = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default BasicButton;
