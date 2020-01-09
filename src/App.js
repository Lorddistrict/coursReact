import React, {useState} from 'react';
import './App.css';
import Theme from "./Theme";
import styled from 'styled-components';
import { Provider } from 'react-redux';
import reducers from "./reducers";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import AppRoutes from "./router/routes";

const Container = styled.div`
    background-image: url(background.png);
`;
const LoaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;
    z-index: 5;
`;

const loggerMiddleware = store => next => action => {
    //console.log(action);
    next(action);
};

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk, loggerMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

function App() {

    const [loading, setLoading] = useState(true);

    const loader = setTimeout(() => {
        setLoading(false);
    }, 2000);
    // }, 100);

    return (
        <Provider store={store}>
            <Theme>
                <Container className="App">
                    {loading
                        ?
                        <LoaderContainer>
                            <img src="loader2.gif" alt="Loader" />
                        </LoaderContainer>
                        :
                        <AppRoutes loading={ loading } />
                    }
                </Container>
            </Theme>
        </Provider>
  );
}

export default App;
