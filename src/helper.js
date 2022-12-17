import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function handleToastNotification(message, status) {
  let toastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  if (status === "success") {
    toast.success(message, toastOptions);
  } else {
    toast.error(message, toastOptions);
  }
}
