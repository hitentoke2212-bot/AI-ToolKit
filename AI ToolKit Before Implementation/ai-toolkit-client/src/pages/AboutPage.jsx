import { Code2, Layers3, ShieldCheck } from "lucide-react";

const principles = [
  { icon: Layers3, title: "A focused foundation", text: "A clean React and Express starter that leaves room for every lesson to build naturally." },
  { icon: Code2, title: "Architecture first", text: "Separate layers keep routes, services, prompts, and client experiences easy to reason about." },
  { icon: ShieldCheck, title: "Ready when you are", text: "Purposeful placeholder endpoints let the application run before any AI provider is connected." },
];

const AboutPage = () => (
  <section className="content-page container">
    <span className="eyebrow"><span /> About the project</span>
    <h1>Build practical AI experiences with a strong foundation.</h1>
    <p className="page-intro">AI Toolkit is the course companion for learning how production Node.js applications prepare, organize, and safely expose generative AI capabilities.</p>
    <div className="principle-grid">{principles.map(({ icon: Icon, title, text }) => <article className="principle-card" key={title}><span className="feature-icon"><Icon size={22} /></span><h2>{title}</h2><p>{text}</p></article>)}</div>
  </section>
);

export default AboutPage;
