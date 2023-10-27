import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoContentForm from "./";
import { useState } from "react";

let setTodo;

const TestComponent = () => {
  const state = {
    todos: [],
  };
  const [text, setText] = useState("");
  setTodo = jest.fn();
  return (
    <TodoContentForm
      state={state}
      text={text}
      setText={setText}
      setTodo={setTodo}
    />
  );
};

const setup = () => {
  const { getByRole } = render(<TestComponent />);
  const todo = getByRole("textbox");
  const button = getByRole("button");
  const inputTodo = (text) => userEvent.type(todo, text);
  const clickButton = () => userEvent.click(button);
  return { inputTodo, clickButton };
};

describe("TodoContentForm", () => {
  test("正常に表示されるか", () => {
    render(<TestComponent />);
    expect(screen.getByText("登録")).toBeInTheDocument();
  });

  test("文字数制限形式が崩れていないか", () => {
    const { inputTodo } = setup();
    inputTodo("abc");
    expect(screen.getByText("3/10")).toBeInTheDocument();
  });

  test("入力内容がsetTodoに渡されているか", () => {
    const { inputTodo, clickButton } = setup();
    inputTodo("abc");
    clickButton();
    expect(setTodo).toHaveBeenCalledWith("abc");
  });
});
