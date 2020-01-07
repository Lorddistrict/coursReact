import React, {useState} from 'react';
import Header from "./Header";
import MessageList from "./MessageList";
import ActionBar from "./ActionBar";
import Separator from "./Separator";
import Theme from "../../Theme";
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    z-index: 5
`;

const Insider = styled.div`
    background-color: ${props => `${props.theme.colors.discordGrey}`};
    width: 60%;
    height: 80%;
    border-width: 1px solid transparent;
`;

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
        <Theme>
            <Container>
                <Insider>
                    <Header/>
                    <MessageList messages={messages} />
                    <Separator/>
                    <ActionBar onMessageSent={onMessageSent} />
                </Insider>
            </Container>
        </Theme>
    );
};

export default ChatBox;