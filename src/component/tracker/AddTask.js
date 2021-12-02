import React, { useState } from 'react'
const AddTask = ({onAdd}) => {
     const [text, setText] = useState('')
     const [day, setDay] = useState('')
     const [reminder, setReminder] = useState(false)
     const addTask = (e) => {
          e.preventDefault()
          if(!text) {
               alert("place add task")
               return 
          }
          onAdd({text, day, reminder})
          setText('')
          setDay('')
          setReminder(false)
     }
     return (
          <form className="add-form" onSubmit={addTask} >
               <div className="form-control">
                    <label htmlFor="task">Task</label>
                    <input 
                         type="text" 
                         id="task" 
                         placeholder="Add Task" 
                         value={text} 
                         onChange={(e)=> setText(e.target.value)} 
                    />
               </div>
               <div className="form-control">
                    <label htmlFor="day">Day & Day</label>
                    <input
                         type="text"
                         id="day"
                         placeholder="Add Day & Day" 
                         value={day} 
                         onChange={(e)=> setDay(e.target.value)} 
                    />
               </div>
               <div className="form-control form-control-check">
                    <label htmlFor="day">Set Reminder</label>
                    <input 
                         type="checkbox"
                         value={reminder} 
                         checked={reminder} 
                         onChange={(e)=> setReminder(e.currentTarget.checked)} 
                    />
               </div>
               <input 
                    type="submit" 
                    value="Save Task" 
                    className="btn btn-block" 
                    style={{ backgroundColor: "#000" }}
               />
          </form>
     )
}

export default AddTask
