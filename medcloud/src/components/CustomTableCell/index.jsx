import TableCell from "@mui/material/TableCell";
import { withTheme } from "@mui/styles";
import { styled } from "@mui/system";

export const CustomTableCell = styled(withTheme(TableCell))((props) => ({
  fontSize: "1rem",
  overflow: "hidden",
  maxWidth: "8rem",
  color: props.theme.palette.secondary.main,
  padding: "0 16px",
}));
