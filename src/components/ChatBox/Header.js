import React from 'react';
import Separator from "./Separator";
import Theme from "../../Theme";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    padding-left: 10px;
`;

const Logo = styled.img`
    height: 50px;
    width: 50px;
`;

const Title = styled.h2`
    padding-left: 10px;
    color: ${props => `${props.theme.colors.discordWhite}`};
`;

const Header = () => {
    return (
        <Theme>
            <Container>
                <Logo src="discord.png" alt="Dofus"/>
                <Title>Discord</Title>
            </Container>
            <Separator/>
        </Theme>
    );
};

export default Header;