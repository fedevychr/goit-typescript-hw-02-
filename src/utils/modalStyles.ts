import { Styles } from "react-modal";

export const modalStyles: Styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    cursor: "pointer",
  },
  content: {
    maxWidth: 800,
    backgroundColor: "transparent",
    border: "none",
    padding: "0 10px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
