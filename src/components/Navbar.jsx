import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BrandMark } from "./BrandMark.jsx";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const scrollTo = (id) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <header className="floating-nav">
      <button
        className="brand-button"
        onClick={() =>
          location.pathname === "/"
            ? window.scrollTo({ top: 0, behavior: "smooth" })
            : window.location.assign("/")
        }
        aria-label="Zariya home"
      >
        <BrandMark />
      </button>
      <button
        className="mobile-menu"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen((v) => !v)}
      >
        {menuOpen ? "×" : "☰"}
      </button>
      <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
        <button onClick={() => scrollTo("languages")}>Our languages</button>
        <button onClick={() => scrollTo("mission")}>Our Mission</button>
        <button onClick={() => scrollTo("built-for-you")}>Built For You</button>
        <button onClick={() => scrollTo("faqs")}>FAQs</button>
      </nav>
      <div className="nav-actions">
        <Link className="nav-signin" to="/signin">
          Sign in
        </Link>
        <Link className="nav-cta" to="/get-started">
          Get Started <span>↗</span>
        </Link>
      </div>
    </header>
  );
}
