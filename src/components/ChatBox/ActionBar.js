import React, { useState } from 'react';
import styled from "styled-components";
import Theme from "../../Theme";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Insider = styled.div`
    display: flex;
    width: 400;
    padding: 15px;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
`;

const Input = styled.input`
    border-radius: 8px;
    box-shadow: 0;
    border-color: #000;
    border-width: 1;
    padding: 10px;
    padding-left: 10px;
    min-width: 250px;
`;

const Button = styled.button`
    border-width: 1px;
    border-color: #1f491a;
    background-color: transparent;
    border-radius: 8px;
    font-weight: bold;
    color: #1f491a;
    padding: 10px;
    margin-left: 10px;
`;

const ActionBar = ({ onMessageSent }) => {
    const [message, setMessage] = useState('');

    const handleClick = () => {
        onMessageSent(message);
    };

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onMessageSent(message);
        }
    };

    return (
        <Theme>
            <Container>
                <Insider>
                    <Input
                        onChange={ handleChange }
                        onKeyPress={ handleKeyPress }
                        type="text"
                        name="message"
                        placeholder="Message"
                        value={ message }
                    />
                    <Button onClick={ handleClick }>Send</Button>
                </Insider>
            </Container>
        </Theme>
    );
};

export default ActionBar;