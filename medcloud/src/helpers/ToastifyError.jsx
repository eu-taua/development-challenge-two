import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastifyError(text) {
  return toast.error(text, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
