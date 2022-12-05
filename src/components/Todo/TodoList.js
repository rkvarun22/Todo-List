import React from "react";
import TodolistItem from "./TodolistItem";
import Card from "../UI/Card";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <Card className="todo-list">
      <table className="item">
        <tr>
          <th>Date</th>
          <th>Item</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
        <TodolistItem data={props.data} />
      </table>
    </Card>
  );
};

export default TodoList;
