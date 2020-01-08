import * as types from '../constants/ActionsTypes';
import axios from 'axios';
import {LOAD_MESSAGES_PENDING, LOAD_MESSAGES_ERROR, LOAD_MESSAGES_SUCCESS} from "../constants/ActionsTypes";

export const addMessage = (messageObj) => ({
    type: types.ADD_MESSAGE_SUCCESS,
    messageObj,
});

export const loadMessages = () => {
    return async dispatch => {
        dispatch({ type: LOAD_MESSAGES_PENDING });

        let url = 'https://my-json-server.typicode.com/tlenclos/formation-react-fake-server/messages';
        return axios
            .get(url)
            .then(response => {
                dispatch({
                    type: LOAD_MESSAGES_SUCCESS,
                    messages: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: LOAD_MESSAGES_ERROR,
                    error: error
                });
            });
    };
};