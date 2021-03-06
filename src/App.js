import React, { useState, useEffect } from "react";
import TodoForm from "./elements/todoForm";
import TodoList from "./elements/todoList";
import Pending from "./elements/pending";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List!</h1>
      <Pending todos={todos} />
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
