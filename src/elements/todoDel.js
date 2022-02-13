import React from "react";

const TodoDel = ({ todo, handleDelete }) => {
  const handleDeleteClick = () => {
    handleDelete(todo.id);
  };

  return (
    <div>
      <span style={{ margin: "10px" }}>{todo.task}</span>
      <input
        style={{ margin: "10px" }}
        type="submit"
        onClick={handleDeleteClick}
        value="Delete"
      />
    </div>
  );
};

export default TodoDel;
