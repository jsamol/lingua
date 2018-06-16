import {
    DELETE_LANGUAGE,
    TOGGLE_LANGUAGE_FILTER,
    ADD_LEARNING_LANGUAGES,
    CLEAR_LANGUAGE_FILTER
} from "../actions/LanguagesActions";

export const languages = (state = [], action) => {
    switch (action.type) {
        case ADD_LEARNING_LANGUAGES:
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

export const filterLanguages = (state = [], action) => {
    switch (action.type) {
        case TOGGLE_LANGUAGE_FILTER:
            if (state.includes(action.id)) {
                const arrayId = state.indexOf(action.id);
                return [
                    ...state.slice(0, arrayId),
                    ...state.slice(arrayId + 1)
                ]
            } else {
                return [
                    ...state,
                    action.id
                ]
            }
        case CLEAR_LANGUAGE_FILTER:
            return [];
        default:
            return state;
    }
};