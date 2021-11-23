import React from 'react';
import AddTask from '../component/tracker/AddTask';
import { Header } from '../component/tracker/Header';
import Tasks from '../component/tracker/Tasks';
import { useSelector, useDispatch } from 'react-redux';
import { addTracker, deleteTracker, toggleReminderTracker } from '../store/trackers/trackers.action';

const Tracker = () => {
     const tasks = useSelector(state => state.tracker.tasks)
     const dispatch = useDispatch()
     const deleteTask = (id) => {
          dispatch(deleteTracker(id))
     }
     const toggleReminder = (id) => {
          dispatch(toggleReminderTracker(id))
     }
     const addTask = (task) => {
          const id = Math.floor(Math.random() * 10000) + 1
          const newTask = {id, ...task}
          dispatch(addTracker(newTask))
     }
     return  (
          <div className="container">
               <Header />
               <AddTask onAdd={addTask}/>
               {tasks.length > 0 ? (
                    <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
               ) : (
                    'No Tasks to show'
               )}
          </div>
     )
}

export default Tracker;