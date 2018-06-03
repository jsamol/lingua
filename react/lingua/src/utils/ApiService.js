import axios from 'axios';

import { BASE_URL } from "./config/ApiConfig";
import { setUser } from "../actions/UserActions";

export const fetchUserData = userId => {
    return (dispatch => {
        axios.get(`${BASE_URL}/users/${userId}`)
            .then(response => {
                dispatch(setUser(response.data))
            })
            .catch(error => {
                console.log(error);
            })
    });
};