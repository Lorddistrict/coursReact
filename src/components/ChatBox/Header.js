import React from 'react';
import Separator from "./Separator";
import Theme from "../../Theme";
import styled from "styled-components";
import {useSelector} from "react-redux";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding-left: 15px;
    width: 98%;
`;
const Insider = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-top: 5px;
`;
const Logo = styled.img`
    height: 50px;
    width: 50px;
`;
const Title = styled.h2`
    padding-left: 10px;
    color: ${props => `${props.theme.colors.discordWhite}`};
`;
const UserContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-top: 5px;
    margin-right: 15px;
`;
const Avatar = styled.img`
    border-radius: 50%;
    overflow: hidden;
    height: 50px;
    width: 50px;
`;
const User = styled.span`
    margin-right: 10px;
    color: ${props => `${props.theme.colors.discordLightGrey}`};
    font: normal 18px/18px Arial, sans-serif;
`;

const Header = () => {

    const user = useSelector(state => state.userReducer.user);

    return (
        <Theme>
            <Container>
                <Insider>
                    <Logo src="discord.png" alt="Discord"/>
                    <Title>Discord</Title>
                </Insider>
                <UserContainer>
                    <User>{ user.username }</User>
                    <Avatar src="avatar.png" alt="User" />
                </UserContainer>
            </Container>
            <Separator />
        </Theme>
    );
};

export default Header;