import React,{useState} from 'react';
import TodoContext  from './TodoContext';

const TodoProvider = ({children}) => {
    const [todos,setTodos] = useState([]);

    const addTodo = (todoText) => {
        const newTodo = {
            id : Date.now(),
            text: todoText,
            completed:false,
        };
        setTodos([...todos,newTodo]);
    };

    const toggleTodo = (id) => {
        const updatedTodos = todos.map((todo) =>
        todo.id === id ? {...todo,completed: !todo.completed} : todo
    );
    setTodos(updatedTodos);
    };

    return (
        <TodoContext.Provider value = {{todos,addTodo,toggleTodo}}>

        </TodoContext.Provider>
    );
};
export default TodoProvider;