import React from "react";
import Theme from "../../Theme";
import styled from "styled-components";

const Line = styled.hr`
    background-color: ${props => `${props.theme.colors.discordLightGrey}`};
    margin: 10px;
    border: 1px solid transparent;
    opacity: 0.3;
`;

const Separator = () => {
    return (
        <Theme>
            <Line/>
        </Theme>
    );
};

export default Separator