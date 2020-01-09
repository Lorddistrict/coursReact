import React, {useState} from 'react';
import './App.css';
import Theme from "./Theme";
import styled from 'styled-components';
import { Provider } from 'react-redux';
import AppRoutes from "./router/routes";
import configStore from "./store/configStore";
import webSocket from "./services/websocket";

const Container = styled.div`
    background-image: url("background.png");
`;
const LoaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;
    z-index: 5;
`;

function App() {

    const [loading, setLoading] = useState(true);

    const loader = setTimeout(() => {
        setLoading(false);
    // }, 2000);
    }, 100); // Test timing

    return (
        <Provider store={configStore}>
            <Theme>
                <Container className="App">
                    {loading
                        ?
                        <LoaderContainer>
                            <img src="loader2.gif" alt="Loader" width="30%" height="auto" />
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
