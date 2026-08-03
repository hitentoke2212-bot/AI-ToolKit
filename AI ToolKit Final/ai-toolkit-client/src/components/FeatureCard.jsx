import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeatureCard = ({ tool }) => {
  const Icon = tool.icon;
  return (
    <Link to={tool.path} className="feature-card">
      <span className="feature-icon"><Icon size={22} strokeWidth={1.8} /></span>
      <div className="feature-card-copy">
        <div className="feature-card-title"><h3>{tool.title}</h3><ArrowUpRight size={18} /></div>
        <p>{tool.description}</p>
      </div>
    </Link>
  );
};

export default FeatureCard;
