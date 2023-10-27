import { findMaxValue } from "./findMaxValue";

test("findMaxValue", () => {
  const list = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];
  const key = "id";
  const result = findMaxValue(list, key);
  expect(result).toBe(2);
});

test("配列の要素が0の場合", () => {
  const list = [];
  const key = "id";
  const result = findMaxValue(list, key);
  expect(result).toBe(0);
});
