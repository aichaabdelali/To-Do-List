import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const Todos = ({ list, markComplete, deleteItem }) => {
  return (
    <div className="Todos">
      {list.map((item) => (
        <TodoItem key={item.id} item={item} markComplete={markComplete} deleteItem={deleteItem} />
      ))}
    </div>
  );
};

Todos.protoTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;
