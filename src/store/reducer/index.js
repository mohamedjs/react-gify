import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './gallary';

// Combine all reducers into root reducer
export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading
});