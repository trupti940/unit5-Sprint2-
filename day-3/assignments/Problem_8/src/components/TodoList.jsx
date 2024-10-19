
import React from 'react';
import TodoItem from './TodoItem';
import { useTodos } from './TodoContext';

function TodoList() {
  const { todos, toggleTodo } = useTodos();

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
