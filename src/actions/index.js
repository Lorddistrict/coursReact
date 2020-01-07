import * as types from '../constants/ActionsTypes';

export const addMessage = (message, author) => ({
    type: types.ADD_MESSAGE,
    message,
    author
});