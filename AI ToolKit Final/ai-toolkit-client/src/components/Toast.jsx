import { CheckCircle2, X } from "lucide-react";

const Toast = ({ message, onClose }) => (
  <div className="toast" role="status">
    <CheckCircle2 size={19} />
    <span>{message}</span>
    <button aria-label="Close notification" onClick={onClose}><X size={17} /></button>
  </div>
);

export default Toast;
