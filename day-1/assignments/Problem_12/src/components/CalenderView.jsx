import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const CalenderView = ({tasks}) => {
    const events = tasks.map((task) => ({
        title:task.title,
        start:new Date(task.dueDate),
        end:new Date(task.dueDate),
    }));

    return (
        <div>
            <h3>Calender</h3>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{height:500}}
            />
        </div>
    );
};

export default CalenderView;