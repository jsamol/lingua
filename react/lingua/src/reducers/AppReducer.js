import {combineReducers} from 'redux';
import {user} from './UserReducer';
import {filterLanguages, languages} from "./LanguagesReducer";
import {courses, selectedCourseId} from "./CoursesReducer";

const appReducer = combineReducers({
    user,
    languages,
    filterLanguages,
    courses,
    selectedCourseId
});

export default appReducer;