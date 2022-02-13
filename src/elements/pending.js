import React from "react";

const Pending = ({ todos }) => {
  return (
    <div>
      <p>Number of pending todos is: {todos.length}</p>
    </div>
  );
};

export default Pending;
