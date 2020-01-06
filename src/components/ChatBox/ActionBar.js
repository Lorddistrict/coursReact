import React, { useState } from 'react';

const ActionBar = () => {

    const [message, setMessage] = useState('');

    const handleClick = () => {
        //TODO do something
    };

    const handleTextEdition = (e) => {
        setMessage(e.target.value);
    };

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <div style={{
                display: "flex",
                width: 400,
                padding: 15,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "flex-start"
            }}>
                <input onChange={ handleTextEdition } type="text" name="message" style={{
                    borderRadius: 8,
                    boxShadow: 0,
                    borderColor: "#1f491a",
                    borderWidth: 1,
                    padding: 10,
                    paddingLeft: 10,
                    minWidth: 250
                }} />
                <button onClick={ handleClick } style={{
                    borderWidth: 1,
                    borderColor: "#1f491a",
                    backgroundColor: "transparent",
                    borderRadius: 8,
                    fontWeight: "bold",
                    color: "#1f491a",
                    padding: 10,
                    marginLeft: 10,
                }}>Send</button>
            </div>
        </div>
    );
};

export default ActionBar;