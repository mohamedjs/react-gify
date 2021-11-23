import { trackerTypes } from "./trackers.types";

export const trackerList = (payload) => {
     return {
          type: trackerTypes.TRACKER_LIST,
          payload: payload
     }
}

export const addTracker = (trackerData) => {
     return {
          type: trackerTypes.ADD_TRACKER,
          payload: trackerData
     }
}

export const deleteTracker = (trackerId) => {
     return {
          type: trackerTypes.DELETE_TRACKER,
          payload: trackerId
     }
}

export const toggleReminderTracker = (trackerId) => {
     return {
          type: trackerTypes.TOGGLE_REMINDER,
          payload: trackerId
     }
}