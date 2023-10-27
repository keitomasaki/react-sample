import { findMaxValue } from "../utils/findMaxValue";
import { DELETE_TODO, SET_TODO } from "./actionTypes";

const appContextReducer = (state, action) => {
  switch (action.type) {
    case SET_TODO:
      return setTodo(state, action.value);
    case DELETE_TODO:
      return deleteTodo(state, action.value);
    default:
      return state;
  }
};

const setTodo = (state, value) => {
  const nextId = findMaxValue(state.todos, "id") + 1;
  const newContent = [
    {
      id: nextId,
      value: value,
    },
  ];
  const newTodos = [...state.todos, ...newContent];
  return {
    ...state,
    todos: newTodos,
  };
};

const deleteTodo = (state, selectId) => {
  const newTodos = state.todos.filter((todo) => todo.id != selectId);
  return {
    ...state,
    todos: newTodos,
  };
};

export default appContextReducer;
