import useWatchText from "./useWatchText";
import { renderHook } from "@testing-library/react";

test("文字数が制限数以上か同じの場合、trueが返ってくるか", () => {
  const max = 2;
  const text = "12";
  const { result } = renderHook(() => useWatchText(max, text));

  expect(result.current).toBe(true);
});
test("文字数が制限数以下の場合、falseが返ってくるか", () => {
  const max = 2;
  const text = "1";
  const { result } = renderHook(() => useWatchText(max, text));

  expect(result.current).toBe(false);
});
