import { ADD_TODO } from "../action/actionType";

const initialState = JSON.parse(localStorage.getItem("toDoList")) || [];

const todoList = (state = initialState, action) => {
  //console.log("reducer data", action)
  switch (action.type) {
    case ADD_TODO: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};

export default todoList;
