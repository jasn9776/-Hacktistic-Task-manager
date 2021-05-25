import {Link} from 'react-router-dom'
import Button from './Button'
import { FaTimes } from 'react-icons/fa'

const Breakdown = ({breakdown}) => {
    return (
        <footer>
            {breakdown.map((subtask) => (
                <>
                <p>
                    {`${subtask} `}
                </p> 
                {/* <Button color='green' text='Close' onClick={onAdd}/>  */}
                <FaTimes/>                   
                </>                   

            ))}
        </footer>
    )
}

export default Breakdown