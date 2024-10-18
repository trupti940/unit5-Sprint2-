import React, { useState,useEffect } from 'react';
import Taskform from './components/Taskform';
import Tasklist from './components/Tasklist';
import CalenderView from './components/CalenderView';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {differenceInMinutes} from 'date-fns';
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks,task]);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_,i) => i !== index);
    setTasks(newTasks);
  };

  useEffect(() => {
    const checkReminder = () => {
      tasks.forEach((task) => {
        const now = new Date();
        const taskTime = new Date(task.dueDate);
        const minutesUnit1Due = differenceInMinutes(taskTime,now);
        if (minutesUnit1Due === task.reminderTime){
          toast.info(`Reminder:Task "${task.title}" is due in ${task.reminderTime} minutes`);

        }
      });
    };

    const interval = setInterval(checkReminder,60000);
    return () => clearInterval(interval);
  },[tasks]);

  return (
    <div>
      <h1>TaskManager</h1>
      <Taskform onAddTask={addTask}/>
      <Tasklist tasks={tasks} onDeleteTask={deleteTask}/>
      <CalenderView tasks={tasks}/>
      <ToastContainer/>
    </div>
  )
}

export default App
