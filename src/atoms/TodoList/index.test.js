import { render, screen } from "@testing-library/react";
import TodoList from "./index";

test("[role=list]", () => {
  const list = [
    { id: 1, value: "123" },
    { id: 2, value: "abc" },
  ];
  render(<TodoList list={list} />);
  expect(screen.getByRole("list")).toBeInTheDocument();
});

test("期待通りの値が表示されるか", () => {
  const list = [
    { id: 1, value: "123" },
    { id: 2, value: "abc" },
  ];
  render(<TodoList list={list} />);
  screen.debug();
  expect(screen.getByText("123")).toBeInTheDocument();
  expect(screen.getByText("abc")).toBeInTheDocument();
});
