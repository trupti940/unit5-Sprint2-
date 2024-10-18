import { useState } from 'react'

import './App.css'

function App() {
  const [todo,setTodo] = useState([]);
  const [newTodo,setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodo([...todo,newTodo]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    const updateTodo = todo.filter((_, todoIndex) => todoIndex !== index);
    setTodo(updateTodo);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>

      <input 
        type = "text"
        placeholder='Enter New todo'
        value={newTodo}
        onChange = {(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todo.map((todo,index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Romove</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App
