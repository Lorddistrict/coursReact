import * as types from '../constants/ActionsTypes';

export const addMessage = (messageObj) => ({
    type: types.ADD_MESSAGE,
    messageObj,
});