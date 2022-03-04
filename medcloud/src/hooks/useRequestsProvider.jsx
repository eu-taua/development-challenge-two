import ToastifyError from "../helpers/ToastifyError";
import ToastifySuccess from "../helpers/ToastifySuccess";
import { useState } from "react";
import useData from "../hooks/useData";

export default function Provider() {
  const [patientId, setPatientId] = useState();
  const [patientInEditing, setPatientInEditing] = useState();
  const { setChanged } = useData();

  const getPatients = async () => {
    try {
      const result = await fetch(
        "https://kklmlkcau0.execute-api.sa-east-1.amazonaws.com/prod/patients"
      );
      const patients = await result.json();
      return patients.body;
    } catch (error) {
      ToastifyError(error.message);
    }
  };

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
      ToastifyError("Falha ao Cadastrar");
    }
  };

  const editPatient = async (patient) => {
    try {
      const result = await fetch(
        "https://kklmlkcau0.execute-api.sa-east-1.amazonaws.com/prod/patients",
        {
          method: "PUT",
          body: JSON.stringify(patient),
        }
      );
      setChanged(result);
      ToastifySuccess("Editado com Sucesso");
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
    patientId,
    setPatientId,
    patientInEditing,
    setPatientInEditing,
    getPatients,
    registerPatient,
    deletePatient,
    editPatient,
  };
}
