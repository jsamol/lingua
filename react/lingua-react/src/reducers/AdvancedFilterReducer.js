import {SET_ADVANCED_FILTER} from "../actions/AdvancedFilterActions";

export const advancedFilter = (state = {}, action) => {
    switch (action.type) {
        case SET_ADVANCED_FILTER:
            return action.filter;
        default:
            return state;
    }
};