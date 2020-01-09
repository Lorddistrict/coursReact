import * as types from '../constants/ActionsTypes';
import axios from 'axios';

export const addMessage = (messageObj) => ({
    type: types.ADD_MESSAGE_SUCCESS,
    messageObj,
});

export const removeMessage = index => {
    return {
        type: types.REMOVE_MESSAGE_ACTION,
        index
    };
};

export const loadMessages = () => {
    return async dispatch => {
        dispatch({ type: types.LOAD_MESSAGES_PENDING });

        let url = 'https://my-json-server.typicode.com/tlenclos/formation-react-fake-server/messages';
        return axios
            .get(url)
            .then(response => {
                dispatch({
                    type: types.LOAD_MESSAGES_SUCCESS,
                    messages: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: types.LOAD_MESSAGES_ERROR,
                    error: error
                });
            });
    };
};