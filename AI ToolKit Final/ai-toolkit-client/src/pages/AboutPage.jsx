import { Code2, Layers3, ShieldCheck } from "lucide-react";

const principles = [
  { icon: Layers3, title: "A complete AI foundation", text: "A clean React and Express project that demonstrates the complete AI request lifecycle." },
  { icon: Code2, title: "Architecture first", text: "Separate layers keep routes, services, prompts, and client experiences easy to reason about." },
  { icon: ShieldCheck, title: "Connected end to end", text: "Each feature page now calls a backend endpoint that uses prompt templates and Gemini." },
];

const AboutPage = () => (
  <section className="content-page container">
    <span className="eyebrow"><span /> About the project</span>
    <h1>Build practical AI experiences with a working implementation.</h1>
    <p className="page-intro">AI Toolkit is the course companion for learning how production Node.js applications organize prompts, route requests, call Gemini, and return AI-generated results.</p>
    <div className="principle-grid">{principles.map(({ icon: Icon, title, text }) => <article className="principle-card" key={title}><span className="feature-icon"><Icon size={22} /></span><h2>{title}</h2><p>{text}</p></article>)}</div>
  </section>
);

export default AboutPage;
