import * as types from '../constants/ActionsTypes';

export const loginUser = (userObj) => ({
    type: types.LOGIN_USER_SUCCESS,
    userObj,
});