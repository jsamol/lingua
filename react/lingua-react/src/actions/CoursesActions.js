export const ADD_AVAILABLE_COURSES = "ADD_AVAILABLE_COURSES";

export const SET_SELECTED_COURSE_ID = "SET_SELECTED_COURSE_ID";
export const REMOVE_SELECTED_COURSE_ID = "REMOVE_SELECTED_COURSE_ID";

export const addCourses = courses => {
    return({
        type: ADD_AVAILABLE_COURSES,
        courses
    });
};

export const setSelectedCourseId = id => {
    return({
        type: SET_SELECTED_COURSE_ID,
        id
    });
};

export const removeSelectedCourseId = () => {
    return({
        type: REMOVE_SELECTED_COURSE_ID
    });
};
