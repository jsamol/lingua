import axios from 'axios';

import {BASE_URL} from "./config/ApiConfig";
import {setUser} from "../actions/UserActions";
import {addLanguages} from "../actions/LanguagesActions";
import {addCourses} from "../actions/CoursesActions";

export const fetchUserData = userId => {
    return (dispatch => {
        axios.get(`${BASE_URL}/users/${userId}`)
            .then(response => {
                const user = response.data;
                dispatch(setUser(user));
            })
            .catch(error => {
                console.log(error);
            })
    });
};

export const fetchLanguages = () => {
    return (dispatch => {
        axios.get(`${BASE_URL}/languages`)
            .then(response => {
                const languages = response.data;
                dispatch(addLanguages(languages));
            })
            .catch(error => {
                console.log(error);
            })
    });
};

export const fetchCourses = () => {
    return (dispatch => {
        axios.get(`${BASE_URL}/courses`)
            .then(response => {
                const courses = response.data;
                dispatch(addCourses(courses));
            })
            .catch(error => {
                console.log(error);
            })
    })
};

export const startNewCourse = (user, courseId) => {
    user.courses.push(courseId);
    axios.put(`${BASE_URL}/users/${user.id}`, user);
};