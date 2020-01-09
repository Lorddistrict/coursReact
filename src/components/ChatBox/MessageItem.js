import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Theme from "../../Theme";
import styled from "styled-components";
import "./MessageList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { removeMessage } from "../../actions/messageAction";
import {useDispatch} from "react-redux";

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`;
const Card = styled.div`
    display: flex;
    justify-content: space-between;
    width: 95%;
    padding: 10px;
    margin-bottom: 20px;
`;
const CardContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
    padding: 5px;
    color: ${props => `${props.theme.colors.discordLightGrey}`};
`;
const CardHorizontal = styled.div`
    display: flex;
    text-align: left;
    flex-direction: column;
    padding-right: 10px;
`;
const CardImage = styled.img`
    border-radius: 50%;
    overflow: hidden;
    height: 40px;
    width: 40px;
`;
const CardInline = styled.div`

`;
const CardAuthor = styled.span`
    font-weight: bold;
    margin-bottom: 10px;
    color: ${props => `${props.theme.colors.discordLightYellow}`};
`;
const CardDate = styled.span`
    margin-bottom: 10px;
    color: ${props => `${props.theme.colors.discordLightGrey}`};
    font-size: 12px;
`;
const CardMessage = styled.span`
    text-align: justify;
    margin-top: 15px;
`;
const TrashContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MessageItem = (props) => {

    const dispatch = useDispatch();
    const [hover, setHover] = useState(false);

    const handleDeleteMessage = (index) => {
        dispatch(removeMessage(index));
    };

    const handleToggleHover = () => {
        setHover(!hover);
    };

    return (
        <Theme>
            <Container>
                <Card>
                    <CardContent>
                        <CardHorizontal>
                            <CardImage src="avatar.png" alt="Profile"/>
                        </CardHorizontal>
                        <CardHorizontal>
                            <CardInline>
                                <CardAuthor>@{ props.username }</CardAuthor>
                                <CardDate>
                                    &nbsp;at&nbsp;
                                    {new Intl.DateTimeFormat('en-GB', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: '2-digit'
                                    }).format(new Date(props.sentAt))}
                                </CardDate>
                            </CardInline>
                            <CardMessage>{ props.message }</CardMessage>
                        </CardHorizontal>
                    </CardContent>
                    <TrashContainer>
                        <FontAwesomeIcon
                            icon={ faTrash }
                            onMouseEnter={ handleToggleHover }
                            onMouseLeave={ handleToggleHover }
                            style={{ cursor: "pointer", color: (hover ? '#E13545' : '#171a1d') }}
                            onClick={() => handleDeleteMessage(props.index) }
                        />
                    </TrashContainer>
                </Card>
            </Container>
        </Theme>
    );
};

MessageItem.propTypes = {
    username: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    sentAt: PropTypes.string.isRequired
};

export default MessageItem;