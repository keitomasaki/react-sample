const findMaxValue = (list, key) => {
  console.log(list);
  const isNotHasItem = list.length === 0;
  if (isNotHasItem) return 0;
  let result = null;
  list.forEach((item) => {
    const value = item[key];
    const isBig = result < value;
    if (isBig) {
      result = value;
    }
  });
  return result;
};

export { findMaxValue };
