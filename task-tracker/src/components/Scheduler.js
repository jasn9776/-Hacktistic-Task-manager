import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { useState, useEffect } from 'react';

const Scheduler = () => {
    const[tasks, setTasks] = useState([])


    // tasks.map((task) => (
    //     <Task 
    //         key={task.id}
    //         task={task}
    //         onDelete={onDelete}
    //         onToggle={onToggle} 
    //     />
    // ))
    useEffect(() => {
        const getTasks = async () => {
          const tasksFromServer = await fetchTasks()
          setTasks(tasksFromServer.map((task) => ({
            Id: 2,
            Subject: task.text,
            StartTime: new Date(2018, 1, 15, 10, 0),
            EndTime: new Date(2018, 1, 15, 12, 30),
            IsAllDay: false,
            Status: 'Completed',
            Priority: 'High'
          })))
        }
    
        getTasks()
      }, [])

    //Fetch Tasks
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()

        console.log(data)
        return data
    };
    var data = [{
            Id: 2,
            Subject: 'Meeting',
            StartTime: new Date(2018, 1, 15, 10, 0),
            EndTime: new Date(2018, 1, 15, 12, 30),
            IsAllDay: false,
            Status: 'Completed',
            Priority: 'High'
        },
        {
            Id: 2,
            Subject: 'Meeting 2',
            StartTime: new Date(2018, 1, 15, 10, 0),
            EndTime: new Date(2018, 1, 15, 12, 30),
            IsAllDay: false,
            Status: 'Completed',
            Priority: 'High'
        },
    ];


        return (<ScheduleComponent height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: tasks,
            fields: {
                id: 'Id',
                subject: { name: 'Subject' },
                isAllDay: { name: 'IsAllDay' },
                startTime: { name: 'StartTime' },
                endTime: { name: 'EndTime' }
            }
        }}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
    </ScheduleComponent>);
}
export default Scheduler;
ReactDOM.render(<Scheduler />, document.getElementById('schedule'));