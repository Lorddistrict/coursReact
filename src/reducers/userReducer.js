import {
    LOGIN_USER_SUCCESS,
} from "../constants/ActionsTypes";

const initialState = {
    user: {},
};

const userReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return {
                user: {
                    email: action.userObj.email,
                    username: action.userObj.username,
                }
            };
        default:
            return state;
    }
};

export default userReducer;