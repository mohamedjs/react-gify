import { combineReducers } from "redux";
import gallaryReducer from "./gallaries/gallaries.reducer";
import trackerReducer from "./trackers/trackers.reducer";
import userReducer from "./user/user.reducer";

export default combineReducers({
    gallary: gallaryReducer,
    tracker: trackerReducer,
    user   : userReducer
});