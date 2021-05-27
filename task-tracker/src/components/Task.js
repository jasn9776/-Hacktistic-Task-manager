import React from 'react'
import { FaTimes } from 'react-icons/fa'
import App from '../App'
import Footer from './Footer'
import Button from './Button'
import Breakdown from './Breakdown'
const Task = ({task, onDelete, onToggle}) => {
    var startTime = new Date(task.StartTime);

    return (
        <div className={`task ${task.reminder ?
        'reminder' : ''}`} onDoubleClick={() =>
        onToggle(task.id)}>
            <h3>
                {task.text} <FaTimes style={{ color:
                'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)} />
            </h3>
            {/* <Button color='green' text='Open Scheduler' onClick={() => {}}/> */}
            <h4>    {<Breakdown id={task.id} >  </Breakdown>    }</h4>
            {/* <p> {task.day}</p> */}
        </div>
    )
}

export default Task