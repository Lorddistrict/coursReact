import React from 'react';
import MessageItem from "./MessageItem";

const MessageList = (data) => {

    const messages = data.messages;

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            overflowY: "scroll",
            height: 370
        }}>
            { messages.map((message, i) => {
                return (
                    <MessageItem
                        key={i}
                        author={message.author}
                        message={message.text}
                    />
                )
            }) }
        </div>
    );
};

export default MessageList;