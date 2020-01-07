import React from 'react';
import MessageItem from "./MessageItem";
import Theme from "../../Theme";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    height: 75%;
`;

const MessageList = (data) => {

    const messages = data.messages;

    return (
        <Theme>
            <Container>
                { messages.map((message, i) => {
                    return (
                        <MessageItem
                            key={i}
                            author={message.author}
                            message={message.text}
                        />
                    )
                }) }
            </Container>
        </Theme>
    );
};

export default MessageList;