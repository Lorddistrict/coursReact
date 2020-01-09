import * as types from '../constants/ActionsTypes';
import webSocket from "../services/websocket";

// export const addMessage = (message, username, sentAt) => ({
//     type: types.ADD_MESSAGE,
//     message,
//     username,
//     sentAt
// });

export const addMessage = (message, username, sentAt) => {
    return (dispatch) => {
        const action = {
            type: types.ADD_MESSAGE,
            message,
            username,
            sentAt
        };
        webSocket.send(JSON.stringify(action));

        return dispatch(action);
    }
};

export const removeMessage = (index) => {
    return {
        type: types.REMOVE_MESSAGE,
        index
    };
};