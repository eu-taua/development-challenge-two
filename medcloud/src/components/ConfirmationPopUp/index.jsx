import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import useData from "../../hooks/useData";
import useRequests from "../../hooks/useRequests";
import Draggable from "react-draggable";
import Paper from "@mui/material/Paper";

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

export default function ConfirmationPopUp() {
  const { openPopUp, setOpenPopUp, popUpMode } = useData();
  const { deletePatient, patientId } = useRequests();

  const handleDelete = () => {
    deletePatient(patientId);
    setOpenPopUp(false);
  };

  const handleClose = () => {
    setOpenPopUp(false);
  };

  return (
    <div>
      <Dialog
        open={openPopUp}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        aria-describedby="draggable-dialog-description"
      >
        <Box width={"20rem"}>
          <DialogTitle id="alert-dialog-title">
            {popUpMode === "delete" && "Excluir Paciente?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description"></DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="text" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="contained" onClick={handleDelete}>
              Confirmar
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}
