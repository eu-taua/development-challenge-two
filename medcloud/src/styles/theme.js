import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#009adf",
      dark: "#002639",
    },
    secondary: {
      light: "#f5f5f5",
      main: "#757575",
      dark: "#3e3e3e",
    },
  },
  typography: {
    fontFamily:
      "Montserrat,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica Neue,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
  },
});

theme = responsiveFontSizes(theme);

export default theme;
