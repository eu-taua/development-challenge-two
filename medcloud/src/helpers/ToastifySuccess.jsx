import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastifySuccess(text) {
  return toast.success(text, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
