export const SET_ADVANCED_FILTER = "SET_ADVANCED_FILTER";

export const setAdvancedFilter = filter => {
    return({
        type: SET_ADVANCED_FILTER,
        filter
    });
};