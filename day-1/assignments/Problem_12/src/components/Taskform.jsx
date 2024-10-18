import { set } from 'date-fns';
import React,{useState} from 'react';

const Taskform = ({onAddTask}) => {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [dueDate,setDueDate] = useState('');
    const [reminderTime,setReminder] = useState(5);

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {
            title,
            description,
            dueDate,
            reminderTime,
        };
        onAddTask(task);
        setTimeout('');
        setDescription('');
        setDueDate('');
        setReminder(5);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Create Task</h3>
            <div>
                <lable>Title</lable>
                <input 
                    type="text"
                    value={title}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <lable>Description:</lable>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <lable>Due Date:</lable>
                <input
                    type="datetime-local"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    required
                />
            </div>
            <div>
                <lable>Reminder (minutes before):</lable>
                <input
                    type="number"
                    value={reminderTime}
                    onChange={(e) => setReminder(e.target.value)}
                />
            </div>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default Taskform;