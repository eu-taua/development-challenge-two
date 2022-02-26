import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import "./App.css";
import ConfirmationPopUp from "./components/ConfirmationPopUp";
import Modal from "./components/Modal/index";
import DataProvider from "./contexts/DataProvider";
import RequestsProvider from "./contexts/RequestsProvider";
import Patients from "./pages/patients";
import theme from "./styles/theme";

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <DataProvider>
          <RequestsProvider>
            <Box
              width="100vw"
              height="100vh"
              display={"flex"}
              justifyContent="center"
              bgcolor="secondary.light"
            >
              <Patients />
            </Box>
            <ConfirmationPopUp />
            <Modal />
            <ToastContainer />
          </RequestsProvider>
        </DataProvider>
      </ThemeProvider>
    </div>
  );
}
