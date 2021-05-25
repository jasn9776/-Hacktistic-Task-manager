import {Link} from 'react-router-dom'
import Button from './Button'
import { FaTimes } from 'react-icons/fa'
import { useState, useEffect } from 'react';
import Step from './Step'
import AddSubtask from './AddSubTask';
const Breakdown = ({id}) => {

  const data = [
    {
    id: 1,
    text: 'Cut apples',
  },
    {
    id: 2,
    text: 'Clean plates',
  },
  ]

  const[breakdown, setBreakdown] = useState(data)


  const deleteStep = (id) => {
    console.log('deleting step', id)
    setBreakdown(breakdown.filter((step) => step.id !== id))
  }

  const addStep = (step) => {
      const id = Math.floor(Math.random() *
      10000) + 1
      console.log(id)
      const newSubtask = {id, ...step }

      setBreakdown([...breakdown, newSubtask])
      // const id = Math.floor(Math.random() *
      // 10000) + 1
      // console.log(id)
      // const newTask = {id, ...task }
      // setTasks([...tasks, newTask])
    }
  


    // useEffect(() => {
    //     const getTasks = async () => {
    //       const tasksFromServer = await fetchTasks()
    //       setTasks(tasksFromServer)
    //     }
    
    //     getTasks()
    //   }, [])
    
      //Fetch Tasks
    //   const fetchBreakdown = async () => {
    //     console.log(id)
    //     const res = await fetch(`http://localhost:5000/breakdowns/${id}`)
    //     const breakdowns = await res.json()
    
    //     return breakdowns
    // }

    // useEffect(() => {
    //     const getTasks = async () => {
    //       const breakdownFromServer = await fetchBreakdown()
    //       setBreakdown(breakdownFromServer)
    //       console.log(breakdown.id)
    //     }
    
    //     getTasks()
    //   }, [])
    


    console.log(id)
    return (
      <>
        <header>  
            {breakdown.map((step) => (
                <Step id={step.id} text={step.text} onDelete={deleteStep}></Step> 
            ))}
        </header>
        <footer>

          <AddSubtask onAdd={addStep}></AddSubtask>
        </footer>
        </>
    )
}

export default Breakdown