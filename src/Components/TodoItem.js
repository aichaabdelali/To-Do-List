import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ item, markComplete, deleteItem, edintingItem }) => {
  const getStyle = () => {
    return {
      display: "flex",
      justifyContent: "center",
      textDecoration: item.completed ? "line-through" : "none",
    };
  };
  const { id, title } = item;
  return (
    <div className="TodoItem" style={getStyle()}>
      <h4>
        <input type="checkbox" onChange={markComplete.bind(this, id)} />
        {title}
        <button className="btn" onClick={deleteItem.bind(this, id)}>
          {" "}
          <i className="fas fa-eraser"></i>{" "}
        </button>
      </h4>
    </div>
  );
};

TodoItem.protoTypes = {
  TodoItem: PropTypes.object.isRequired,
};

export default TodoItem;
