import React from "react";
import { useDispatch } from 'react-redux'
import TodoForm from "../NewTodo/TodoForm";
import "./NewTodo.css";
import { addTodo } from "../../redux/action/action";

const NewTodo = () => {
  const dispatch = useDispatch();

  const saveTodoDataHandler = (enterTodoData) => {
    const todoData = {
      ...enterTodoData,
      id: Math.random().toString(),
    };
    let toDoList = JSON.parse(window.localStorage.getItem("toDoList")) || [];
    toDoList.push(todoData);
    window.localStorage.setItem("toDoList", JSON.stringify(toDoList));
    dispatch(addTodo(todoData));
  };

  return (
    <div className="new-todo">
      <TodoForm onSaveTodoData={saveTodoDataHandler} />
    </div>
  );
};

export default NewTodo;
