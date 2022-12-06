import "./TodoDate.css";

const TodoDate = (props) => {
  const date = new Date(props.date);
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="todo-date">
      <div className="todo-date__month">{month}</div>
      <div className="todo-date__year">{year}</div>
      <div className="todo-date__day">{day}</div>
    </div>
  );
};

export default TodoDate;
