import { ArrowLeft, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import EmptyState from "../components/EmptyState";
import Loader from "../components/Loader";
import Toast from "../components/Toast";

const FeaturePage = ({ tool }) => {
  const [input, setInput] = useState("");
  const [toast, setToast] = useState(false);
  const Icon = tool.icon;
  const handleGenerate = () => {
    setToast(true);
    window.setTimeout(() => setToast(false), 3500);
  };

  return (
    <section className="feature-page container">
      <Link to="/" className="back-link"><ArrowLeft size={17} /> Back to dashboard</Link>
      <div className="feature-page-heading"><span className="feature-icon"><Icon size={22} /></span><div><span className="section-kicker">AI workflow</span><h1>{tool.title}</h1><p>{tool.description}</p></div></div>
      <div className="workbench">
        <section className="input-panel panel">
          <div className="panel-heading"><div><h2>{tool.inputLabel}</h2><p>Provide the context for your future AI workflow.</p></div><span>{input.length} characters</span></div>
          <textarea value={input} onChange={(event) => setInput(event.target.value)} placeholder={tool.prompt} aria-label={tool.inputLabel} />
          <div className="panel-action"><span>AI connection is disabled for this course stage.</span><button className="primary-button" onClick={handleGenerate}>Generate <Send size={16} /></button></div>
        </section>
        <section className="output-panel panel">
          <div className="panel-heading"><div><h2>Generated output</h2><p>Results will be displayed here.</p></div><span className="status-pill"><i /> Waiting</span></div>
          <div className="output-placeholder"><Loader /><EmptyState /></div>
        </section>
      </div>
      {toast && <Toast message="AI integration coming in the next section..." onClose={() => setToast(false)} />}
    </section>
  );
};

export default FeaturePage;
