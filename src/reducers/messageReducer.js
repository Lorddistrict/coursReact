import {
    ADD_MESSAGE_SUCCESS,
    LOAD_MESSAGES_SUCCESS
} from "../constants/ActionsTypes";

const initialState = {
    messages: [],
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE_SUCCESS:
            return {
                messages: [
                    ...state.messages,
                    {
                        username: action.messageObj.username,
                        message: action.messageObj.message,
                        sentAt: action.messageObj.sentAt,
                    }
                ],
            };
        case LOAD_MESSAGES_SUCCESS:
            return {
                messages: action.messages
            };
        default:
            return state;
    }
};

export default messageReducer;