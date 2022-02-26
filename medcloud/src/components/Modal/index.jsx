import { Box, InputLabel, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import * as React from "react";
import { useState } from "react";
import Draggable from "react-draggable";
import useData from "../../hooks/useData";
import useRequests from "../../hooks/useRequests";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function Modal() {
  const { openModal, setOpenModal } = useData();
  const { registerPatient } = useRequests();

  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleRegister = async () => {
    registerPatient({
      name,
      birthdate,
      email,
      address,
    });
    setOpenModal(false);
  };

  return (
    <div>
      <Dialog
        open={openModal}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Novo Paciente
        </DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Box>
            <InputLabel htmlFor="Nome">Nome</InputLabel>
            <TextField
              size="small"
              name="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>

          <Box>
            <InputLabel htmlFor="birthdate">Data de Nascimento</InputLabel>
            <TextField
              size="small"
              name="birthdate"
              placeholder="0000-00-00"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </Box>
          <Box>
            <InputLabel htmlFor="email">Email</InputLabel>
            <TextField
              size="small"
              name="email"
              placeholder="exemplo@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box>
            <InputLabel htmlFor="address">Endereço</InputLabel>
            <TextField
              size="small"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancelar
          </Button>
          <Button onClick={handleRegister}>Confirmar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
