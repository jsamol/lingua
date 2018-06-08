export const ADD_AVAILABLE_COURSES = "ADD_AVAILABLE_COURSES";

export const addCourses = courses => {
    return({
        type: ADD_AVAILABLE_COURSES,
        courses
    });
};
