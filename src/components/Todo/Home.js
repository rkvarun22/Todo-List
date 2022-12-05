import React, { useState } from "react";
import { connect } from "react-redux";
import TodoList from "./TodoList";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const [dataToShow, setDataToShow] = useState(props.todoList);
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/newtodo");
  };

  const onChange = (e) => {
    //console.log(e.target.value, "eee");
    const filteredData = props.todoList.filter((val) =>
      val.category.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setDataToShow(filteredData);
  };
  return (
    <div className="App-header">
      <h2 className="h2">Let's Get Started ToDo List</h2>
      Search Category
      <input type="search" className="search" onChange={onChange} />
      <TodoList data={dataToShow} />
      <button onClick={onClickHandler}>
        <h1>Add New List</h1>
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList,
  };
};

export default connect(mapStateToProps)(Home);
