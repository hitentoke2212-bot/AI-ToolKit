import { ArrowRight, Boxes, ChevronRight, ShieldCheck } from "lucide-react";
import FeatureCard from "../components/FeatureCard";
import { featureTools } from "../utils/features";

const DashboardPage = () => (
  <>
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow"><span /> AI API Integrations</span>
          <h1>AI Toolkit</h1>
          <p>Integrate Generative AI into modern Node.js applications using clean backend architecture.</p>
          <a href="#tools" className="primary-button">Explore tools <ArrowRight size={18} /></a>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="visual-header"><span /><span /><span /></div>
          <div className="visual-content">
            <div className="visual-badge"><Boxes size={17} /> AI workflows</div>
            <div className="visual-rail"><span className="rail-dot">01</span><i /><span className="rail-dot">02</span><i /><span className="rail-dot">03</span></div>
            <div className="visual-cards"><div /><div /><div /></div>
            <div className="visual-safe"><ShieldCheck size={18} /> Structured, secure, scalable</div>
          </div>
        </div>
      </div>
    </section>
    <section className="tools-section container" id="tools">
      <div className="section-heading">
        <div><span className="section-kicker">Workspace</span><h2>Explore AI workflows</h2><p>Start with a focused interface for every course module.</p></div>
        <span className="tool-count">{featureTools.length} tools available</span>
      </div>
      <div className="feature-grid">{featureTools.map((tool) => <FeatureCard key={tool.id} tool={tool} />)}</div>
      <div className="course-note"><div><span className="section-kicker">Course foundation</span><h3>Integration-ready by design</h3><p>Every workspace is connected to a placeholder endpoint, ready for you to build the AI layer step by step.</p></div><ChevronRight size={24} /></div>
    </section>
  </>
);

export default DashboardPage;
