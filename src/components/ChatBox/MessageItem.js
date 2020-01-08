import React  from 'react';
import PropTypes from 'prop-types';
import Theme from "../../Theme";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`;
const Card = styled.div`
    display: flex;
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
const CardInliner = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-right: 10px;
`;
const CardImage = styled.img`
    border-radius: 50%;
    overflow: hidden;
    height: 40px;
    width: 40px;
`;
const CardAuthor = styled.span`
    font-weight: bold;
    margin-bottom: 10px;
    color: ${props => `${props.theme.colors.discordWhite}`};
`;
const CardMessage = styled.span`
    text-align: justify;
`;

const MessageItem = (props) => {

    return (
        <Theme>
            <Container>
                <Card>
                    <CardContent>
                        <CardInliner>
                            <CardImage src="avatar.png" alt="Profile"/>
                        </CardInliner>
                        <CardInliner>
                            <CardAuthor>@{ props.username }</CardAuthor>
                            <CardMessage>{ props.message }</CardMessage>
                        </CardInliner>
                    </CardContent>
                </Card>
            </Container>
        </Theme>
    );
};

MessageItem.propTypes = {
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default MessageItem;