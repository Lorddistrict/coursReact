import React  from 'react';
import Header from "./Header";
import MessageList from "./MessageList";
import ActionBar from "./ActionBar";
import Separator from "./Separator";
import Theme from "../../Theme";
import styled from "styled-components";
import { useSelector } from "react-redux";
import MessageItem from "./MessageItem";
import PropTypes from "prop-types";

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
    border: 1px solid transparent;
`;
const Content = styled.div`
    height: 75%;
`;
const NoMessageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
`;
const NoMessageImg = styled.img`
    width: 30%;
    height: auto;
`;
const NoMessageTxt = styled.span`
    font-weight: bold;
    color: ${props => `${props.theme.colors.discordLightGrey}`};
`;

const ChatBox = () => {

    const messages = useSelector(state => state.messageReducer.messages);
    console.log(messages);

    return (
        <Theme>
            <Container>
                <Insider>
                    <Header/>
                    <Content>
                        { messages.length === 0
                            ?
                            <NoMessageContainer>
                                <NoMessageImg src="monster.png" />
                                <NoMessageTxt>Hi there ! There is no message yet !</NoMessageTxt>
                            </NoMessageContainer>
                            :
                            <MessageList messages={ messages } />
                        }
                    </Content>
                    <Separator/>
                    <ActionBar/>
                </Insider>
            </Container>
        </Theme>
    );
};

export default ChatBox;