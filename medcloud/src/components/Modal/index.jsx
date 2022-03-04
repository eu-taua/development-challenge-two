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
import InputMask from "react-input-mask";
import { format, parse } from "date-fns";
import ToastifyError from "../../helpers/ToastifyError";

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
    cleanInputs();
  };

  const handleRegister = async (name, birthdate, email, address) => {
    if (!name || !birthdate || !email || !address) {
      return ToastifyError("Preencha todos os campos");
    }

    let date = parse(birthdate, "dd/MM/yyyy", new Date());
    try {
      date = format(date, "yyyy-MM-dd");
    } catch (err) {
      return ToastifyError("Data Inválida");
    }

    const emailValidation = /\S+@\S+\.\S+/;
    if (!emailValidation.test(email)) return ToastifyError("Email Inválido");

    registerPatient({
      name,
      birthdate: date,
      email,
      address,
    });

    setOpenModal(false);
    cleanInputs();
  };

  const cleanInputs = () => {
    setName("");
    setBirthdate("");
    setEmail("");
    setAddress("");
  };
  return (
    <div>
      <Dialog
        open={openModal}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        PaperProps={{
          style: {
            borderRadius: "2rem",
            width: "22rem",
          },
        }}
      >
        <Box display="flex" flexDirection={"column"} alignItems={"center"}>
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
              <InputMask
                mask="99/99/9999"
                value={birthdate}
                disabled={false}
                maskChar=" "
                onChange={(e) => setBirthdate(e.target.value)}
              >
                {() => (
                  <TextField
                    size="small"
                    name="birthdate"
                    placeholder="00/00/0000"
                    value={birthdate}
                  />
                )}
              </InputMask>
            </Box>
            <Box>
              <InputLabel htmlFor="email">Email</InputLabel>
              <TextField
                fullWidth
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
            <DialogActions>
              <Button variant="text" onClick={handleClose}>
                Cancelar
              </Button>
              <Button
                variant="contained"
                onClick={() => handleRegister(name, birthdate, email, address)}
              >
                Confirmar
              </Button>
            </DialogActions>
          </DialogContent>
        </Box>
      </Dialog>
    </div>
  );
}
