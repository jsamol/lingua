import {ADD_AVAILABLE_COURSES} from "../actions/CoursesActions";

export const courses = (state = [], action) => {
    switch (action.type) {
        case ADD_AVAILABLE_COURSES:
            return([
                ...state,
                ...action.courses
            ]);
        default:
            return state;
    }
};