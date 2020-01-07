import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        discordBlue: "#7289da",
        discordWhite: "#ffffff",
        discordLightGrey: "#99aab5",
        discordGrey: "#2c2f33",
        discordDarkGrey: "#23272a",
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