export const ADD_LEARNING_LANGUAGES = "ADD_LEARNING_LANGUAGES";
export const DELETE_LANGUAGE = "DELETE_LANGUAGE";

export const TOGGLE_LANGUAGE_FILTER = "TOGGLE_LANGUAGE_FILTER";
export const CLEAR_LANGUAGE_FILTER = "CLEAR_LANGUAGE_FILTER";

export const addLanguages = languages => {
    return({
        type: ADD_LEARNING_LANGUAGES,
        languages
    });
};

export const deleteLanguage = id => {
    return({
        type: DELETE_LANGUAGE,
        id
    });
};

export const toggleLanguageFilter = id => {
    return({
        type: TOGGLE_LANGUAGE_FILTER,
        id
    });
};

export const clearLanguageFilter = () => {
    return({
        type: CLEAR_LANGUAGE_FILTER
    });
};