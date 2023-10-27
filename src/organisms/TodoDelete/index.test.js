import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoDelete from "./";
import { useState } from "react";

let deleteTodo;
const state = {
  todos: [{ id: 1, value: "abc" }],
};

const TestComponent = () => {
  const [selectTodo, setSelectTodo] = useState(null);
  deleteTodo = jest.fn();
  return (
    <TodoDelete
      state={state}
      selectTodo={selectTodo}
      setSelectTodo={setSelectTodo}
      deleteTodo={deleteTodo}
    />
  );
};

const setup = () => {
  const { getByRole } = render(<TestComponent />);
  const combobox = getByRole("combobox");
  const button = getByRole("button");
  const select = (index) =>
    userEvent.selectOptions(combobox, state.todos[index].value);
  const clickButton = () => userEvent.click(button);
  return { select, clickButton, combobox };
};

describe("TodoContentForm", () => {
  test("正常に表示されるか", () => {
    setup();
    expect(screen.getByText("削除")).toBeInTheDocument();
  });

  test("期待通りの値が選択されているか", () => {
    const { combobox, select } = setup();
    select(0);
    expect(combobox).toHaveDisplayValue(state.todos[0].value);
  });
});
