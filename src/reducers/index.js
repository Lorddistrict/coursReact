import { combineReducers } from "redux";

import messageReducer from "./messageReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
    messageReducer,
    userReducer,
});

export default reducers;