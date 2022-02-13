import React from "react";
import TodoDel from "./todoDel";

const TodoList = ({ todos, handleDelete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoDel key={todo.id} todo={todo} handleDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default TodoList;
