import React from 'react'
import { FaTimes } from 'react-icons/fa'
import App from '../App'
import Footer from './Footer'
import Breakdown from './Breakdown'
const Task = ({task, onDelete, onToggle}) => {


    return (
        <div className={`task ${task.reminder ?
        'reminder' : ''}`} onDoubleClick={() =>
        onToggle(task.id)}>
            <h3>
                {task.text} <FaTimes style={{ color:
                'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)} />
            </h3>
            <h4>    {task.reminder ?
        'reminder' : <Breakdown id={task.id} >  </Breakdown>    }</h4>
            <p> {task.day}</p>
        </div>
    )
}

export default Task