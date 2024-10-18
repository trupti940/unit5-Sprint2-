import React from 'react';

const Tasklist = ({tasks,onDeleteTask}) => {
    return (
        <div>
            <h3>Task List</h3>
            {tasks.length === 0 ? (
                <p>No tasks added yet.</p>
            ) : (
                <ul>
                    {tasks.map((task,index) => (
                        <li key={index}>
                            <strong>{task.title}</strong> - {task.deuDate}
                            <button onClick={() => onDeleteTask(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>

    )
}

export default Tasklist;

