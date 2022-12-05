import React, { useState } from "react";
import { connect } from "react-redux";
import TodoList from "./TodoList";
import { useNavigate } from "react-router-dom";
//import todoList from "../../redux/reducer/todoList";
import { addTodo } from "../../redux/action/action";

function Home() {
  const data = JSON.parse(window.localStorage.getItem("toDoList")) || [];
  const [dataToShow, setDataToShow] = useState(data);

  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/newtodo");
  };

  const onChange = (e) => {
    console.log(e.target.value, "eee");
    const filteredData = data.filter((val) =>
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

const mapStateToProps = state => {
  return {
    payload: state.payload
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: () => dispatch(addTodo())
      
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Home)

//export default Home;
