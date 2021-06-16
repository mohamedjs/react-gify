import { gallaryTypes } from './gallaries.types'

const initialState = {
    gallaryLists: [],
    loading: false,
    error: false
};

export default function gallaryReducer(state = initialState, action) {
    switch (action.type) {
        case gallaryTypes.ITEMS_IS_LOADING:
            {
                return {
                    ...state,
                    loading: action.isLoading,
                };
            }
        case gallaryTypes.ITEMS_FETCH_DATA_SUCCESS:
            {
                return {
                    ...state,
                    gallaryLists: state.gallaryLists.concat(action.items)
                }
            }
        case gallaryTypes.ITEMS_HAS_ERRORED:
            {
                return {
                    ...state,
                    error: action.hasErrored
                };
            }
        default:
            {
                return state;
            }
    }
}