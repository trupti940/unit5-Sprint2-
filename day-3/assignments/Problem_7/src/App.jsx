import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    const newTab = {
      id: Date.now(),
      text: todoText,
      completed:false,
    };
    setTodos([...todos,newTab]);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? {...todo, completed:!todo.completed} : todo
    );
    setTodos(updatedTodos);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>

      
    </div>
  );
}

export default App;


