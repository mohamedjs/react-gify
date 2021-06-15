import { ITEMS_HAS_ERRORED, ITEMS_IS_LOADING, ITEMS_FETCH_DATA_SUCCESS } from '../constants/gallary-action-types'

// Reducers for error, loading and data fetch
// const initState = {
//     items: []
// }
export const itemsHasErrored = (state = false, action) => {
    switch (action.type) {
        case ITEMS_HAS_ERRORED:
            return action.hasErrored;
        default:
            return state;
    }
}

export const itemsIsLoading = (state = false, action) => {
    switch (action.type) {
        case ITEMS_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export const items = (state = [], action) => {
    switch (action.type) {
        case ITEMS_FETCH_DATA_SUCCESS:
            return action.items
        default:
            return state;
    }
}