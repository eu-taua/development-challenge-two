import { Button, styled } from "@mui/material";
import { withTheme } from "@mui/styles";

export const CustomButton = styled(withTheme(Button))((props) => ({
  borderRadius: "0.5rem",
  color: props.theme.palette.primary.light,
}));
