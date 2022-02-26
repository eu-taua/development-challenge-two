import { useState } from "react";
import ToastifyError from "../helpers/ToastifyError";
import ToastifySuccess from "../helpers/ToastifySuccess";

export default function Provider() {
  const [patientId, setPatientId] = useState();

  const [openModal, setOpenModal] = useState(false);

  const [openPopUp, setOpenPopUp] = useState(false);
  const [popUpMode, setPopUpMode] = useState();

  const [changed, setChanged] = useState();

  const registerPatient = async (patient) => {
    try {
      const result = await fetch(
        "https://kklmlkcau0.execute-api.sa-east-1.amazonaws.com/prod/patients",
        {
          method: "POST",
          body: JSON.stringify(patient),
        }
      );
      setChanged(result);
      ToastifySuccess("Cadastrado com Sucesso");
    } catch (error) {
      ToastifyError("Falha ao Editar");
    }
  };

  const deletePatient = async (id) => {
    try {
      const result = await fetch(
        "https://kklmlkcau0.execute-api.sa-east-1.amazonaws.com/prod/patients",
        {
          method: "DELETE",
          body: JSON.stringify({ id }),
        }
      );
      setChanged(result);
      ToastifySuccess("Excluido com Sucesso");
    } catch (error) {
      ToastifyError("Falha ao Excluir");
    }
  };

  return {
    openModal,
    setOpenModal,
    changed,
    setChanged,
    registerPatient,
    deletePatient,
    openPopUp,
    setOpenPopUp,
    popUpMode,
    setPopUpMode,
    patientId,
    setPatientId,
  };
}
