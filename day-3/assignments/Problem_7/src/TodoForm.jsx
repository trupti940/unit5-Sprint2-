import React,{useState} from 'react';

function TodoForm({addTodo}) {
    const [inputValue,setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()){
            addTodo(inputValue);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new todo"

            />
            <button type="submit">Add Todo</button>
        </form>
    );
}
export default TodoForm;