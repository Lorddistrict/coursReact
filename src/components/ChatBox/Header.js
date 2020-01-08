import React from 'react';
import Separator from "./Separator";
import Theme from "../../Theme";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    padding-left: 15px;
`;
const Insider = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    width: 98%;
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

const Header = () => {
    return (
        <Theme>
            <Container>
                <Insider>
                    <Logo src="discord.png" alt="Dofus"/>
                    <Title>Discord</Title>
                </Insider>
            </Container>
            <Separator />
        </Theme>
    );
};

export default Header;