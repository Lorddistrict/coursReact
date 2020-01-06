import React, { useState } from 'react';
import MessageItem from "./MessageItem";

const MessageList = () => {

    const [messages, setMessage] = useState([
        { author: 'lorddistrict', text: 'I like potatoes so much !' },
        { author: 'heat', text: 'How dare you, it tastes so bad !!!' },
        { author: 'kevkev', text: 'Pref cakes....mmmmh cake' },
        { author: 'lolipop87', text: 'COOOOKIIIIIIIIES' },
    ]);

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
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