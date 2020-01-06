import React from 'react';
import Header from "./Header";
import MessageList from "./MessageList";
import ActionBar from "./ActionBar";
import Separator from "./Separator";

const ChatBox = () => {
    return (
        <div style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            zIndex: 5
        }}>
            <div style={{
                backgroundColor: "#b5ffa5",
                width: 400,
                borderWidth: 1,
                borderRadius: 8
            }}>
                <Header/>
                <MessageList/>
                <Separator/>
                <ActionBar/>
            </div>
        </div>
    );
};

export default ChatBox;