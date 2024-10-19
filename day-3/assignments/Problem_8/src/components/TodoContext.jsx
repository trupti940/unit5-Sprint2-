import React,{createContext,useContext,useState} from 'react';

const TodoContext = createContext();

export const useTodos = () => {
    return useContext(TodoContext);
};

export default TodoContext;