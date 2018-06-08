import {combineReducers} from 'redux';
import {user} from './UserReducer';
import {filterLanguages, languages} from "./LanguagesReducer";
import {courses} from "./CoursesReducer";

const appReducer = combineReducers({
    user,
    languages,
    filterLanguages,
    courses
});

export default appReducer;