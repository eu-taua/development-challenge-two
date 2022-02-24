import { Box, Button } from "@mui/material";
import "./App.css";
import Table from "./components/Table/index";
import Modal from "./components/Modal/index";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Toastify from "./helpers/Toastify";
function App() {
  const [openModal, setOpenModal] = useState(false);
  const [changed, setChanged] = useState();

  const registerPatient = async (patient) => {
    const result = await fetch(
      "https://kklmlkcau0.execute-api.sa-east-1.amazonaws.com/prod/patients",
      {
        method: "POST",
        body: JSON.stringify(patient),
      }
    );
    if (result.status === 200) {
      setChanged(result);
      Toastify("Cadastrado com Sucesso");
    }
  };

  return (
    <div className="App">
      <Box
        width="100vw"
        height="100vh"
        display={"flex"}
        justifyContent="center"
      >
        <Box
          padding={"2rem"}
          width="70%"
          display={"flex"}
          flexDirection="column"
          alignItems={"flex-end"}
          gap="2rem"
        >
          <Button
            variant="contained"
            style={{ borderRadius: "0.8rem" }}
            onClick={() => setOpenModal(true)}
          >
            + Adicionar Cliente
          </Button>
          <Table changed={changed} setChanged={setChanged} />
        </Box>
      </Box>
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        registerPatient={registerPatient}
      />
      <ToastContainer />
    </div>
  );
}

export default App;
