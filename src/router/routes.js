import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux'
import LoginBox from "../components/LoginBox/LoginBox";
import ChatBox from "../components/ChatBox/ChatBox";

const AppRoutes = (props) => {

    const user = useSelector(state => state.userReducer.user);
    let loggedIn = (user.email !== undefined && user.username !== undefined);

    return (
        <Router>
            <Redirect exact from="/" to="/login" />
            <Route path="/login">
                <LoginBox />
            </Route>
            <Route path="/chat">
                <ChatBox />
            </Route>
            { loggedIn ? <Redirect to="/chat" loading={ props.loading } /> : <LoginBox /> }
        </Router>
    );
};

export default AppRoutes;