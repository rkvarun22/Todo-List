import React from "react";
import { connect } from "react-redux";
import TodoForm from "../NewTodo/TodoForm";
import "./NewTodo.css";
import { addTodo } from "../../redux/action/action";

const NewTodo = (props) => {
  const saveTodoDataHandler = (enterTodoData) => {
    if(enterTodoData){
      console.log(props);
      const todoData = {
        ...enterTodoData,
        id: Math.random().toString(),
      };
      let toDoList = JSON.parse(window.localStorage.getItem("toDoList")) || [];
      toDoList.push(todoData);
      window.localStorage.setItem("toDoList", JSON.stringify(toDoList));
      props.addTodo(todoData);  
    }
  };

  return (
    <div className="new-todo">
      <TodoForm onSaveTodoData={saveTodoDataHandler} />
    </div>
  );
};


const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todoData) => dispatch(addTodo(todoData)),
  };
};


export default connect(null, mapDispatchToProps)(NewTodo);
