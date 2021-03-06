import React from 'react';
import MessageItem from "./MessageItem";
import Theme from "../../Theme";
import styled from "styled-components";
import "./MessageList.css";
import PropTypes from "prop-types";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    height: 97%;
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
                            index={i}
                            username={ message.username }
                            message={ message.message }
                            sentAt={ message.sentAt }
                        />
                    )
                }) }
            </Container>
        </Theme>
    );
};

MessageItem.propTypes = {
    message: PropTypes.string.isRequired,
};

export default MessageList;