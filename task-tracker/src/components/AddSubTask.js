import {useState} from 'react'

const AddSubtask = ({ onAdd}) => {

    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task')
            return
        }

        onAdd({ text})

        setText('')

    }

    return (
        <form className='add-form' onSubmit=
        {onSubmit}>
            <div className='form-control'>
                <label>Add SubTask</label>
                <input type='text' placeholder='Add
                SubTask' value={text} onChange={(e) =>
                setText(e.target.value)} />
            </div>
            <input type='submit' value='Save Subtask'
            className='btn btn-block' />

        </form>
    )
}

export default AddSubtask