import {useState} from 'react'
import DateTimePicker from 'react-datetime-picker'
const AddTask = ({onAdd}) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [breakdown, setBreakdown] = useState('');
    const [reminder, setReminder] = useState(false);
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());


    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task')
            return
        }
        const StartTime = startTime;
        const EndTime = endTime;
        onAdd({ text, StartTime, EndTime, day, reminder, breakdown})

        setText('')
        setDay('')
        setReminder(false)

    }

    return (
        <form className='add-form' onSubmit=
        {onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add
                Task' value={text} onChange={(e) =>
                setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day and Time</label>
                <input type='text' placeholder='Add
                Day and Time' value={day} onChange={(e) =>
                    setDay(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Breakdown</label>
                <input type='text' placeholder='Add
                Breakdown' value={breakdown} onChange={(e) =>
                    setBreakdown(e.target.value)}/>
            </div>
            <DateTimePicker
                onChange={setStartTime}
                value={startTime}
            />
            
            
            <DateTimePicker
                onChange={setEndTime}
                value={endTime}
            />


            <div className='form-control
            form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' 
                checked={reminder}
                value={reminder} 
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            

            <input type='submit' value='Save Task'
            className='btn btn-block' />

        </form>
    )
}

export default AddTask