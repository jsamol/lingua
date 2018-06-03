import { DELETE_LANGUAGE, UPDATE_LEARNING_LANGUAGES } from "../actions/LanguagesActions";

export const languages = (state = [], action) => {
    switch (action.type) {
        case UPDATE_LEARNING_LANGUAGES:
            return([
                ...state,
                ...action.languages
            ]);
        case DELETE_LANGUAGE:
            return([
                ...state.slice(0, action.id),
                ...state.slice(action.id + 1)
            ]);
        default:
            return state;
    }
};