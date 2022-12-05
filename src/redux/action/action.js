import { ADD_TODO } from "./actionType";

export const addTodo = (content) => {
    return {
       type: ADD_TODO,
       payload: content
    };
  };