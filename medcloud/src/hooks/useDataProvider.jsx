import { useState } from "react";
import { format } from "date-fns";

export default function Provider() {
  const [openModal, setOpenModal] = useState(false);

  const [openPopUp, setOpenPopUp] = useState(false);
  const [popUpMode, setPopUpMode] = useState();

  const [changed, setChanged] = useState();

  const formatedDate = (date) => {
    return format(
      new Date(
        new Date(date).valueOf() +
          new Date(date).getTimezoneOffset() * 60 * 1000
      ),
      "dd/MM/yyyy"
    );
  };

  return {
    openModal,
    setOpenModal,
    changed,
    setChanged,
    openPopUp,
    setOpenPopUp,
    popUpMode,
    setPopUpMode,
    formatedDate,
  };
}
