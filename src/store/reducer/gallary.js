import { ITEMS_HAS_ERRORED, ITEMS_IS_LOADING, ITEMS_FETCH_DATA_SUCCESS } from '../constants/gallary-action-types'

// Reducers for error, loading and data fetch
// const initState = {
//     items: []
// }
// export const itemsHasErrored = (state = false, action) => {
//     switch (action.type) {
//         case ITEMS_HAS_ERRORED:
//             return action.hasErrored;
//         default:
//             return state;
//     }
// }
// 
// export const itemsIsLoading = (state = false, action) => {
//     switch (action.type) {
//         case ITEMS_IS_LOADING:
//             return action.isLoading;
//         default:
//             return state;
//     }
// }
// 
// export const items = (state = initState, action) => {
//     switch (action.type) {
//         case ITEMS_FETCH_DATA_SUCCESS:
//             return {
//               ...state,
//               items: state.items.concat(action.items)
//             }
//         default:
//             return state;
//     }
// }

const initialState = {
    data: [],
    loading: false,
    error: false
};

export default function reduxThunkReducer(state = initialState, action) {
    switch (action.type) {
        case ITEMS_IS_LOADING: {
            return {
                ...state,
                loading: action.isLoading,
            };
        }
        case ITEMS_FETCH_DATA_SUCCESS: {
            return {
              ...state,
              data: state.data.concat(action.items)
            }
        }
        case ITEMS_HAS_ERRORED: {
            return {
                ...state,
                error: action.hasErrored
            };
        }
        default: {
            return state;
        }
    }
}