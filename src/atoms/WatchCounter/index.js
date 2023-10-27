import React from "react";
import useWatchText from "../../hooks/useWatchText";
import "./style.css";

const WatchCounter = ({ max, text }) => {
  const isInvalid = useWatchText(max, text);
  const length = text.length || 0;
  return (
    <span className="watch-counter" data-invalid={isInvalid}>
      {`${length}/${max}`}
    </span>
  );
};

export default WatchCounter;
