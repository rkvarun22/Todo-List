import React from "react";
import TodoDate from "./TodoDate";
import "./TodolistItem.css";

const TodolistItem = (props) => {
  return (
    <>
      {
       props.data.map((item, index) => {
          if(!item.date || !item.item || !item.category || !item.amount) {
            return null;
          }
          return (
            <tr key={index}>
              <td>
                <TodoDate date={item.date} />
              </td>
              <td>{item.item}</td>
              <td>{item.category}</td>
              <td className="todolist-item__price">Rs. {item.amount}</td>
            </tr>
          );
      })
      }
    </>
  );
};

export default TodolistItem;
