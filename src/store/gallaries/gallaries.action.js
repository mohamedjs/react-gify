import { gallaryTypes } from './gallaries.types'

// Helper actions for error, loading and data fetch success

export const itemsHasErrored = (bool) => {
    return {
        type: gallaryTypes.ITEMS_HAS_ERRORED,
        hasErrored: bool
    };
}

export const itemsIsLoading = (bool) => {
    return {
        type: gallaryTypes.ITEMS_IS_LOADING,
        isLoading: bool
    };
}

export const itemsFetchDataSuccess = (items) => {
    return {
        type: gallaryTypes.ITEMS_FETCH_DATA_SUCCESS,
        items
    };
}

// Driver action to fetch data

export function itemsFetchData(url) {
    return async dispatch => {
        try {
            dispatch(itemsIsLoading(true));

            const response = await fetch(url)
            const json = await response.json()
            if (!json.meta.status) {
                throw Error(json.message);
            } else {
                dispatch(itemsIsLoading(false));
                dispatch(itemsFetchDataSuccess(json.data))
            }
        } catch (err) {
            dispatch(itemsHasErrored(true))
        }
    }
}