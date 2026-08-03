import { Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import AboutPage from "./pages/AboutPage";
import DashboardPage from "./pages/DashboardPage";
import DocumentationPage from "./pages/DocumentationPage";
import FeaturePage from "./pages/FeaturePage";
import NotFoundPage from "./pages/NotFoundPage";
import { featureTools } from "./utils/features";

const App = () => (
  <div className="app-shell">
    <Navbar />
    <main className="page-content">
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        {featureTools.map((tool) => (
          <Route key={tool.path} path={tool.path} element={<FeaturePage tool={tool} />} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;
