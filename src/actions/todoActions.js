import { CREATE_TODO, REMOVE_TODO } from '../types/todoTypes';

export const createTodo = (todo) => {
  return {
    type: CREATE_TODO,
    payload: todo,
  };
};

export const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    payload: todo,
  };
};
