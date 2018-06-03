import { combineReducers } from 'redux';
import { user } from './UserReducer';
import { languages, filterLanguages } from "./LanguagesReducer";

const appReducer = combineReducers({
    user,
    languages,
    filterLanguages
});

export default appReducer;