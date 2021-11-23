import {trackerTypes} from "./trackers.types";

const initState = {
     tasks: [
          {
               id: 1,
               text: "create react page",
               day: "march 5th at 2:30pm",
               reminder: false
          },
          {
               id: 2,
               text: "handle react list",
               day: "march 5th at 2:45pm",
               reminder: false
          },
          {
               id: 3,
               text: "show react list page",
               day: "march 5th at 3:00pm",
               reminder: false
          }
     ]
}
const trackerReducer = (state = initState, action) => {
     switch (action.type) {
          case trackerTypes.TRACKER_LIST:
          {
               return {...state, tasks: state.tasks};
          }
          case trackerTypes.ADD_TRACKER:
          {
               return {...state, tasks: [...state.tasks, action.payload]};
          }
          case trackerTypes.DELETE_TRACKER:
          { 
               return {...state, tasks: state.tasks.filter((task) => task.id !== action.payload)}
          }
          case trackerTypes.TOGGLE_REMINDER:
          {
               return {...state, tasks: state.tasks.map((task) => 
                    task.id === action.payload ? {...task, reminder: !task.reminder} : task
               )}
          }
          default:
               return state
     }
}

export default trackerReducer