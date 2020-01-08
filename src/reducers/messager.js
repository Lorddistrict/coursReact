import {ADD_MESSAGE, ADD_MESSAGE_ERROR, ADD_MESSAGE_SUCCESS} from "../constants/ActionsTypes";

const initialState = {
    messages: [],
};

const messager = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                messages: [
                    ...state.messages,
                    {
                        username: action.messageObj.username,
                        message: action.messageObj.message
                    }
                ],
            };
        case ADD_MESSAGE_SUCCESS:
            return {
                message: [
                    ...state.messages,
                ],
                type: 'Success',
            };
        case ADD_MESSAGE_ERROR:
            return {
                message: [
                    ...state.messages,
                ],
                type: 'Error',
            };
        default:
            return state;
    }
};

export default messager;