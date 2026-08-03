const steps = ["Choose a workflow from the dashboard.", "Enter the content or brief you want to process.", "Click Generate to call the matching Express endpoint.", "Review the Gemini response in the output panel."];

const DocumentationPage = () => (
  <section className="content-page container docs-page">
    <span className="eyebrow"><span /> Documentation</span>
    <h1>Designed for a complete AI integration workflow.</h1>
    <p className="page-intro">This implementation connects React pages to Express routes, prompt templates, an AI service layer, and the Google Gemini SDK.</p>
    <article className="docs-card"><h2>How the workflow works</h2><ol>{steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol></article>
  </section>
);

export default DocumentationPage;
