import React, {useRef, useState} from 'react';
import Header from "./Header";
import MessageList from "./MessageList";
import ActionBar from "./ActionBar";
import Separator from "./Separator";

const ChatBox = () => {

    const [messages, setMessages] = useState([
        { author: 'lorddistrict', text: 'I like potatoes so much !' },
        { author: 'heat', text: 'How dare you, it tastes so bad !!!' },
        { author: 'kevkev', text: 'Pref cakes....mmmmh cake' },
        { author: 'lolipop87', text: 'COOOOKIIIIIIIIES' },
    ]);

    // TODO manage no message on the box

    const onMessageSent = (message) => {
        if (message !== '') {
            let newMessage = { author: 'Me', text: message };
            setMessages([...messages, newMessage]);
        } else {
            alert("There is no message");
        }
    };

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
                borderRadius: 8,
            }}>
                <Header/>
                <MessageList messages={messages} />
                <Separator/>
                <ActionBar onMessageSent={onMessageSent} />
            </div>
        </div>
    );
};

export default ChatBox;