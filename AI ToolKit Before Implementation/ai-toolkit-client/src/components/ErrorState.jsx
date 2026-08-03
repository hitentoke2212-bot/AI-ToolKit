import { AlertCircle } from "lucide-react";

const ErrorState = ({ message = "Something went wrong. Please try again." }) => (
  <div className="error-state" role="alert"><AlertCircle size={20} /> <span>{message}</span></div>
);

export default ErrorState;
