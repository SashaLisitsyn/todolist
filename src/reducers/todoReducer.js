import { CREATE_TODO, REMOVE_TODO } from '../types/todoTypes';

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todos: state.todos.concat([action.payload]),
      };
    case REMOVE_TODO:
      const id = action.payload;
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== id),
      };
    default:
      return state;
  }
};

export default todoReducer;
