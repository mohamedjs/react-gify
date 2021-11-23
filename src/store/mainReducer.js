import { combineReducers } from "redux";
import gallaryReducer from "./gallaries/gallaries.reducer";
import trackerReducer from "./trackers/trackers.reducer";

export default combineReducers({
    gallary: gallaryReducer,
    tracker: trackerReducer
});