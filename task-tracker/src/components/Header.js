import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title, onAdd, onSchedulerClick, showAdd, showScheduler}) => {

    const onClick = () => {
        console.log('Click')
    }


    return (
        <header className='header'>
            <h1 >{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
            <Button color={showScheduler ? 'red' : 'green'} text={showScheduler ? 'Close Scheduler' : 'Open Scheduler'} onClick={onSchedulerClick}/>

        </header>
    )
}



Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//     color: 'black',
//     backgroundColor:'black',
// }

export default Header