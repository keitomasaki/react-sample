import { SET_TODO, DELETE_TODO } from "./actionTypes";
import reducers from "./reducers";

test("setTodo。初めての追加の場合", () => {
  const state = {
    todos: [],
  };
  const action = {
    type: SET_TODO,
    value: "123",
  };
  const expectResult = {
    ...state,
    todos: [
      {
        id: 1,
        value: "123",
      },
    ],
  };
  const result = reducers(state, action);
  expect(expectResult).toEqual(result);
});

test("setTodo。二回目以降の追加の場合", () => {
  const state = {
    todos: [
      {
        id: 1,
        value: "123",
      },
    ],
  };
  const action = {
    type: SET_TODO,
    value: "abc",
  };
  const expectResult = {
    ...state,
    todos: [
      {
        id: 1,
        value: "123",
      },
      {
        id: 2,
        value: "abc",
      },
    ],
  };
  const result = reducers(state, action);
  expect(result).toEqual(expectResult);
});

test("DELETE_TODO。期待通りの値を返すか", () => {
  const state = {
    todos: [
      {
        id: 1,
        value: "123",
      },
    ],
  };
  const action = {
    type: DELETE_TODO,
    value: 1,
  };
  const expectResult = {
    ...state,
    todos: [],
  };
  const result = reducers(state, action);
  expect(result).toEqual(expectResult);
});
