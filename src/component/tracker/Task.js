import React from 'react'

const Task = ({task, onDelete, onToggle}) => {
     return (
          <div className={`task ${task.reminder? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
               <h3>
                    {task.text} 
                    <span 
                         style={{ color: "red" }}
                         onClick={() => onDelete(task.id)}
                    >x
                    </span>
               </h3>
               <p>{task.day}</p>
          </div>
     )
}

export default Task