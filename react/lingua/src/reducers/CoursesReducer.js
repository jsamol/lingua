import {ADD_AVAILABLE_COURSES, REMOVE_SELECTED_COURSE_ID, SET_SELECTED_COURSE_ID} from "../actions/CoursesActions";

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

export const selectedCourseId = (state = -1, action) => {
    switch (action.type) {
        case SET_SELECTED_COURSE_ID:
            return action.id;
        case REMOVE_SELECTED_COURSE_ID:
            return -1;
        default:
            return state;
    }
};