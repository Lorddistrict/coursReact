import {
    ADD_MESSAGE,
    REMOVE_MESSAGE,
    LOAD_MESSAGES_SUCCESS
} from "../constants/ActionsTypes";

const initialState = {
    messages: [],
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                messages: [
                    ...state.messages,
                    {
                        username: action.username,
                        message: action.message,
                        sentAt: action.sentAt,
                    }
                ],
            };
        case REMOVE_MESSAGE:
            return {
                messages: state.messages.filter((message, i) => i !== action.index)
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