import Header from "../components/Header/index";
import Table from "../components/Table/index";
import { Box } from "@mui/system";
export default function Patients() {
  return (
    <Box
      padding={"2rem"}
      width="70%"
      display={"flex"}
      flexDirection="column"
      alignItems={"flex-end"}
      gap="2rem"
    >
      <Header />
      <Table />
    </Box>
  );
}
