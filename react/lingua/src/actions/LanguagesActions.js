export const UPDATE_LEARNING_LANGUAGES = "UPDATE_LEARNING_LANGUAGES";
export const DELETE_LANGUAGE = "DELETE_LANGUAGE";

export const TOGGLE_LANGUAGE_FILTER = "TOGGLE_LANGUAGE_FILTER";

export const updateLanguages = languages => {
    return({
        type: UPDATE_LEARNING_LANGUAGES,
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