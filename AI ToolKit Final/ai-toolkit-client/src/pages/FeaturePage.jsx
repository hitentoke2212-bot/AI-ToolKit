import { ArrowLeft, Send } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import EmptyState from "../components/EmptyState";
import ErrorState from "../components/ErrorState";
import Loader from "../components/Loader";
import { runAiWorkflow } from "../services/api";

const FeaturePage = ({ tool }) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const Icon = tool.icon;

  const handleGenerate = async () => {
    const trimmedInput = input.trim();

    if (!trimmedInput) {
      setError(`Please enter ${tool.inputLabel.toLowerCase()} before generating.`);
      return;
    }

    try {
      setIsLoading(true);
      setError("");
      setOutput("");

      const result = await runAiWorkflow(tool, trimmedInput);
      setOutput(result);
    } catch (requestError) {
      const message = requestError.response?.data?.message || "Unable to connect to the AI backend. Make sure the server is running.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="feature-page container">
      <Link to="/" className="back-link"><ArrowLeft size={17} /> Back to dashboard</Link>
      <div className="feature-page-heading"><span className="feature-icon"><Icon size={22} /></span><div><span className="section-kicker">AI workflow</span><h1>{tool.title}</h1><p>{tool.description}</p></div></div>
      <div className="workbench">
        <section className="input-panel panel">
          <div className="panel-heading"><div><h2>{tool.inputLabel}</h2><p>Provide the context for this AI workflow.</p></div><span>{input.length} characters</span></div>
          <textarea value={input} onChange={(event) => setInput(event.target.value)} placeholder={tool.prompt} aria-label={tool.inputLabel} />
          <div className="panel-action"><span>Connected to the Express AI endpoint.</span><button className="primary-button" onClick={handleGenerate} disabled={isLoading}>{isLoading ? "Generating..." : "Generate"} <Send size={16} /></button></div>
        </section>
        <section className="output-panel panel">
          <div className="panel-heading"><div><h2>Generated output</h2><p>Results from Gemini will be displayed here.</p></div><span className={`status-pill ${output ? "ready" : ""}`}><i /> {isLoading ? "Loading" : output ? "Ready" : "Waiting"}</span></div>
          {error && <ErrorState message={error} />}
          <div className="output-placeholder">
            {isLoading && <Loader label="Generating AI response" />}
            {!isLoading && !output && !error && <EmptyState description="Enter your content and choose Generate to call the backend API." />}
            {output && <pre className="generated-output">{output}</pre>}
          </div>
        </section>
      </div>
    </section>
  );
};

export default FeaturePage;
