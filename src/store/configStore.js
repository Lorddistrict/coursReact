import { applyMiddleware, compose, createStore } from "redux";
import reducers from "../reducers";
import thunk from "redux-thunk";

const loggerMiddleware = configStore => next => action => {
    //console.log('middleware');
    next(action);
};

const configStore = createStore(
    reducers,
    compose(
        applyMiddleware(thunk, loggerMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default configStore;