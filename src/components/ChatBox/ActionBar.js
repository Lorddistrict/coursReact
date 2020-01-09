import React, { useState } from 'react';
import styled from "styled-components";
import Theme from "../../Theme";
import { useDispatch } from 'react-redux';
import { addMessage } from "../../actions/messageAction";

const Container = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;
const Insider = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    padding: 15px;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
`;
const Input = styled.input`
    border-radius: 5px;
    box-shadow: none;
    border: 1px solid transparent;
    padding: 10px;
    padding-left: 10px;
    width: 90%;
    background-color: ${props => `${props.theme.colors.discordChatBox}`};
    color: ${props => `${props.theme.colors.discordLightGrey}`};
`;
const EraserButton = styled.button`
    border-radius: 0;
    box-shadow: none;
    border: 1px solid transparent;
    background-color: ${props => `${props.theme.colors.discordChatBox}`};
    color: ${props => `${props.theme.colors.discordLightGrey}`};
    font-weight: bold;
    position: absolute;
    bottom: 38%;
    right: 105px;
`;
const Button = styled.button`
    border: 1px solid transparent;
    border-radius: 5px;
    font-weight: bold;
    color: ${props => `${props.theme.colors.discordWhite}`};
    padding: 10px 20px 10px 20px;
    margin-left: 10px;
    background-color: ${props => `${props.theme.colors.discordGreen}`};
`;

const ActionBar = () => {

    const dispatch = useDispatch();
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        let currentDate = new Date();
        let messageObj = {
            username: 'Me',
            message: message,
            sentAt: currentDate
        };

        if (message !== '') {
            dispatch(addMessage(messageObj));
        }
    };

    const handleEraser = () => {
        setMessage('');
    };

    const handleTypingMessage = (event) => {
        setMessage(event.target.value);
    };

    const handlePressingEnter = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <Theme>
            <Container>
                <Insider>
                    <Input
                        onChange={ handleTypingMessage }
                        onKeyPress={ handlePressingEnter }
                        type="text"
                        name="message"
                        placeholder="Message #general"
                        value={ message }
                    />
                    <EraserButton onClick={ handleEraser }>x</EraserButton>
                    <Button onClick={ handleSendMessage }>Send</Button>
                </Insider>
            </Container>
        </Theme>
    );
};

export default ActionBar;