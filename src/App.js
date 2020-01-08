import React, {useState} from 'react';
import './App.css';
import ChatBox from "./components/ChatBox/ChatBox";
import Theme from "./Theme";
import styled from 'styled-components';
import { Provider } from 'react-redux';
import reducers from "./reducers";
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";

const Container = styled.div`
    background-image: url(background.jpg);
`;
const Filter = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${props => `${props.theme.colors.discordBlack}`};
    opacity: 0.5;
    z-index: 1;
`;
const LoaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;
    z-index: 5;
`;

// const loggerMiddleware(action) => {
//     console.log('middleware');
//     next(action);
// };

const store = createStore(
    reducers,
    compose(
        // applyMiddleware(thunk, loggerMiddleware),
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

function App() {

    const [loading, setLoading] = useState(true);

    const loader = setTimeout(() => {
        setLoading(false);
    }, 1000);

    return (
        <Provider store={store}>
            <Theme>
                <Container className="App">
                    {loading
                        ?
                        <LoaderContainer>
                            <img src="loader2.gif" />
                        </LoaderContainer>
                        :
                        <>
                            <ChatBox loading={loading} />
                            <Filter/>
                        </>
                    }

                </Container>
            </Theme>
        </Provider>
  );
}

export default App;
