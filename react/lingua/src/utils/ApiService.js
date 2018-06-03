import axios from 'axios';

import { BASE_URL } from "./config/ApiConfig";
import { setUser } from "../actions/UserActions";
import { updateLanguages } from "../actions/LanguagesActions";

export const fetchUserData = userId => {
    return (dispatch => {
        axios.get(`${BASE_URL}/users/${userId}`)
            .then(response => {
                const user = response.data;
                dispatch(setUser(user));
                dispatch(fetchAvailableLanguages(user.languages));
            })
            .catch(error => {
                console.log(error);
            })
    });
};

export const fetchAvailableLanguages = userLanguages => {
    return (dispatch => {
        axios.get(`${BASE_URL}/languages`)
            .then(response => {
                const languages = response.data.filter((language) => {
                    return userLanguages.includes(language.id)
                });
                dispatch(updateLanguages(languages));
            })
            .catch(error => {
                console.log(error);
            })
    });
};