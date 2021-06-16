import { createSelector } from "reselect";

const selectGallary = state => state.gallary
const selectLoading = state => state.gallary;
const selectError = state => state.gallary;

export const selectGallaryValue = createSelector(
    [selectGallary],
    gallary => gallary.gallaryLists
);

export const selectLoadingValue = createSelector(
    [selectLoading],
    gallary => gallary.loading
);

export const selectErrorValue = createSelector(
    [selectError],
    gallary => gallary.error
);