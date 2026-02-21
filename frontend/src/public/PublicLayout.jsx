import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";

function PublicLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="public-site">

      <nav className="navbar">
        <div className="brand">Preeti Matching Center</div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/products" onClick={() => setMenuOpen(false)}>Products</NavLink>
          <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </div>
      </nav>

      <Outlet />

      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
      >
        💬
      </a>

      <footer className="footer">
        © 2026 Preeti Matching Center | Lala Gali, Jaora
      </footer>

    </div>
  );
}

export default PublicLayout;