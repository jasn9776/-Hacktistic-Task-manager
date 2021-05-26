import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Step = ({id, text, onDelete}) => {
    return (
        <div>
            <p>{text} </p>
            <FaTimes  onClick={() => onDelete(id)}/>  
        </div>
    )
}

export default Step
