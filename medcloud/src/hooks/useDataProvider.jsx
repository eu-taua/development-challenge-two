import { useState } from "react";

export default function Provider() {
  const [openModal, setOpenModal] = useState(false);

  const [openPopUp, setOpenPopUp] = useState(false);
  const [popUpMode, setPopUpMode] = useState();

  const [changed, setChanged] = useState();

  return {
    openModal,
    setOpenModal,
    changed,
    setChanged,
    openPopUp,
    setOpenPopUp,
    popUpMode,
    setPopUpMode,
  };
}
