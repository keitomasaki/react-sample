import { useEffect, useState } from "react";

const useWatchText = (max, text) => {
  const [isInvalid, setIsInvalid] = useState(false);

  useEffect(() => {
    if (text.length >= max) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  }, [text]);

  return isInvalid;
};

export default useWatchText;
