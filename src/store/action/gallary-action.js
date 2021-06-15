import { ITEMS_HAS_ERRORED, ITEMS_IS_LOADING, ITEMS_FETCH_DATA_SUCCESS } from '../constants/gallary-action-types'

// Helper actions for error, loading and data fetch success

export const itemsHasErrored = (bool) => {
    return {
        type: ITEMS_HAS_ERRORED,
        hasErrored: bool
    };
}

export const itemsIsLoading = (bool) => {
    return {
        type: ITEMS_IS_LOADING,
        isLoading: bool
    };
}

export const itemsFetchDataSuccess = (items) => {
    return {
        type: ITEMS_FETCH_DATA_SUCCESS,
        items
    };
}

// Driver action to fetch data

export const itemsFetchData = (url) => {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw Error(res.statusText);
                }
                dispatch(itemsIsLoading(false));
                return res;
            })
            .then((res) => res.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items.data)))
            .catch(() => dispatch(itemsHasErrored(true)));
    }
}