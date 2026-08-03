import { FileOutput } from "lucide-react";

const EmptyState = ({ title = "Your result will appear here", description = "Enter your content and choose Generate when the AI workflow is connected." }) => (
  <div className="empty-state">
    <span className="empty-icon"><FileOutput size={23} /></span>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default EmptyState;
