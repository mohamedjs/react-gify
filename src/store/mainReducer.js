import { combineReducers } from "redux";
import gallaryReducer from "./gallaries/gallaries.reducer";

export default combineReducers({
    gallary: gallaryReducer,
});