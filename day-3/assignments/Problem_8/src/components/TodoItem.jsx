
import React from 'react';

function TodoItem({ todo, toggleTodo }) {
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  return (
    <li>
      <label>
        <input 
          type="checkbox" 
          checked={todo.completed} 
          onChange={handleToggle} 
        />
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
      </label>
    </li>
  );
}

export default TodoItem;