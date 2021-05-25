import {Link} from 'react-router-dom'
import Button from './Button'
import { FaTimes } from 'react-icons/fa'

const Breakdown = ({id}) => {
    console.log(id)
    return (
        <footer>

                    {`${id} `}
                {/* <Button color='green' text='Close' onClick={onAdd}/>  */}
                <FaTimes/>                   

        </footer>
    )
}

export default Breakdown