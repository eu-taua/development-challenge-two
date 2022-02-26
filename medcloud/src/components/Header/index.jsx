import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CustomButton } from "../CustomButton";
import useData from "../../hooks/useData";

export default function Header() {
  const { setOpenModal } = useData();
  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <Box
          component="img"
          alt="logo"
          src="https://medcloud.link/svgs/medcloud.svg"
          width="10rem"
        />
      </Box>

      <Box>
        <CustomButton variant="outlined" onClick={() => setOpenModal(true)}>
          + Adicionar Cliente
        </CustomButton>
      </Box>
    </Box>
  );
}
