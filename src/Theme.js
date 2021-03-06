import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        discordBlue: "#7289da",
        discordWhite: "#ffffff",
        discordSimiliWhite: "#d7d7d7",
        discordLightGrey: "#99aab5",
        discordChatBox: "#484C52",
        discordGrey: "#2c2f33",
        discordDarkGrey: "#23272a",
        discordDarkDarkGrey: "#171a1d",
        discordBlack: "#000000",
        discordGreen: "#42B581",
        discordRed: "#E13545",
        discordOrange: "#F26422",
        discordLightYellow: "#fffcc2",

    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;