import { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoContentInput from "./index";

const TestComponent = () => {
  const [text, setText] = useState("");
  return <TodoContentInput text={text} setter={setText} />;
};

test("文字を入力したら、テキストエリアが期待通りの値を持つか", () => {
  render(<TestComponent />);
  userEvent.type(screen.getByRole("textbox"), "Hello");
  expect(screen.getByRole("textbox")).toHaveValue("Hello");
});

test("制限文字数が正常に働くか", () => {
  render(<TestComponent />);
  userEvent.type(screen.getByRole("textbox"), "01234567890");
  expect(screen.getByRole("textbox")).toHaveValue("0123456789");
});
