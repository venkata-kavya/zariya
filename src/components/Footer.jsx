import React from "react";
import { Link } from "react-router-dom";
import { BrandMark } from "./BrandMark.jsx";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-overlay" />
      <div className="footer-script" lang="fa" dir="rtl">
        زبان‌های فراموش‌شده، دوباره زنده
      </div>
      <p className="footer-tagline">
        Forgotten languages, <em>alive again.</em>
      </p>
      <nav className="footer-links">
        <Link to="/about">About</Link>
        <a href="#how-it-works">How it works</a>
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
        <Link to="/cancellation">Cancellation</Link>
        <a href="#faqs">FAQ</a>
        <Link to="/contact">Help</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Link className="footer-signin" to="/signin">
        Sign in
      </Link>
      <svg
        className="footer-waves"
        viewBox="0 0 1400 150"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M-20 80 C160 5 220 145 400 70S690 15 845 75s220 55 350-6 170 10 235 0"
          stroke="#e8d35d"
          strokeWidth="7"
          fill="none"
        />
        <path
          d="M-20 110 C130 45 230 145 390 100S665 30 830 100s225 30 360-10 175 0 240-6"
          stroke="#7fc3df"
          strokeWidth="6"
          fill="none"
        />
      </svg>
      <div className="footer-wordmark" aria-hidden="true">
        <span>Z</span>
        <span>a</span>
        <span>r</span>
        <span>i</span>
        <span>y</span>
        <span>a</span>
      </div>
      <div className="footer-bottom">
        <BrandMark word light />
        <span>© 2026 Zariya. Made for connection.</span>
        <div className="social-links">
          <a href="https://www.instagram.com/" aria-label="Instagram">
            ◎
          </a>
          <a href="https://www.youtube.com/" aria-label="YouTube">
            ▶
          </a>
          <a href="https://www.tiktok.com/" aria-label="TikTok">
            ♪
          </a>
        </div>
      </div>
    </footer>
  );
}
