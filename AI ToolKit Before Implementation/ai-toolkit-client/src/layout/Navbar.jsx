import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Dashboard", to: "/" },
  { label: "About", to: "/about" },
  { label: "Documentation", to: "/documentation" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-content">
        <NavLink to="/" className="brand" onClick={closeMenu}>
          <span className="brand-mark"><Sparkles size={18} /></span>
          <span>
            <strong>AI Toolkit</strong>
            <small>Powered by Gemini API</small>
          </span>
        </NavLink>
        <button className="menu-button" aria-label="Toggle navigation" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={isOpen ? "nav-links nav-open" : "nav-links"} aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
