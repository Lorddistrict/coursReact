import { ADD_MESSAGE } from "../constants/ActionsTypes";

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
                        author: action.messageObj.author,
                        text: action.messageObj.text
                    }
                ]
            };
        default:
            return state;
    }
};

export default messager;