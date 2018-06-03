import { combineReducers } from 'redux';
import { user } from './UserReducer';
import { languages } from "./LanguagesReducer";

const appReducer = combineReducers({
    user,
    languages
});

export default appReducer;