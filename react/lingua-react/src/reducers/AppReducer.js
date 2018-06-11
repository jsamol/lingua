import {combineReducers} from 'redux';
import {user} from './UserReducer';
import {filterLanguages, languages} from "./LanguagesReducer";
import {courses, selectedCourseId} from "./CoursesReducer";
import {advancedFilter} from "./AdvancedFilterReducer";

const appReducer = combineReducers({
    user,
    languages,
    filterLanguages,
    courses,
    selectedCourseId,
    advancedFilter
});

export default appReducer;