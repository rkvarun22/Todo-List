import React, { useState } from "react";
import "./TodoForm.css";
import { Link, useNavigate } from "react-router-dom";

const TodoForm = (props) => {
  const [enterDate, setEnterDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
  };

  const [enterItem, setEnterItem] = useState("");
  const itemChangeHandler = (event) => {
    setEnterItem(event.target.value);
  };

  const [enterCategory, setEnterCategory] = useState("");
  const categoryChangeHandler = (event) => {
    setEnterCategory(event.target.value);
  };

  const [enterAmount, setEnterAmount] = useState("");
  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // if (
    //   !enterDate.date &&
    //   !enterItem.title &&
    //   !enterCategory.category &&
    //   !enterAmount.amount
    // ) {
    //   alert("Please fill out all fields");
    // } else {
    //   alert("Form Submitted Successfully");
    // }

    const TodoDate = {
      date: new Date(enterDate),
      item: enterItem,
      category: enterCategory,
      amount: enterAmount,
    };
    props.onSaveTodoData(TodoDate);
    setEnterDate("");
    setEnterItem("");
    setEnterCategory("");
    setEnterAmount("");

    navigate("/");
  };

  const navigate = useNavigate();
  const goToHome = () => {
    console.log("Home Page");
    
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-todo__control wrapper">
        <div className="new-todo__control">
          <label>Date</label>
          <input type="date" value={enterDate} onChange={dateChangeHandler} />
        </div>
        <div className="new-todo-control">
          <label>Item</label>
          <input type="text" value={enterItem} onChange={itemChangeHandler} />
        </div>

        <div className="new-todo__control">
          <label>Category</label>
          <input
            type="text"
            value={enterCategory}
            onChange={categoryChangeHandler}
          />
        </div>
        <div className="new-todo__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-todo__actions">
          <button type="submit" onClick={() => goToHome}>
            Add Todo
          </button>
        </div>
        <div>
          <h1>
            <Link to="/">Homepage</Link>
          </h1>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
