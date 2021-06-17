import { createSelector } from "reselect";

const selectGallary = state => state.gallary

export const selectGallaryValue = createSelector(
    [selectGallary],
    gallary => gallary.gallaryLists
);

export const selectLoadingValue = createSelector(
    [selectGallary],
    gallary => gallary.loading
);

export const selectErrorValue = createSelector(
    [selectGallary],
    gallary => gallary.error
);