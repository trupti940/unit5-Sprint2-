
import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoProvider from './components/TodoProvider';
// import TodoContext from './components/TodoContext';

function App() {
  return (
    <TodoProvider>
      <div>
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
      {/* <TodoContext/> */}
    </TodoProvider>
  );
}

export default App;