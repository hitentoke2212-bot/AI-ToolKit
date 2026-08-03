const steps = ["Choose a workflow from the dashboard.", "Enter the content or brief you want to process.", "Connect the backend endpoint during the AI integration module."];

const DocumentationPage = () => (
  <section className="content-page container docs-page">
    <span className="eyebrow"><span /> Documentation</span>
    <h1>Designed for a gradual AI integration journey.</h1>
    <p className="page-intro">This starter deliberately contains no provider SDK, API key usage, or generated content. The course will implement those pieces in later modules.</p>
    <article className="docs-card"><h2>How the workflow will evolve</h2><ol>{steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol></article>
  </section>
);

export default DocumentationPage;
