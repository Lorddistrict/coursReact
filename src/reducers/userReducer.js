import {
    LOGIN_USER_SUCCESS,
} from "../constants/ActionsTypes";

const initialState = {
    user: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return {
                user: {
                    email: action.user.email,
                    username: action.user.username,
                }
            };
        default:
            return state;
    }
};

export default userReducer;