import React from "react";
import "./App.css";
import NewTodo from "./components/NewTodo/NewTodo";
import Home from "./components/Todo/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/newtodo" element={<NewTodo />} />
    </Routes>
  );
};

export default App;
