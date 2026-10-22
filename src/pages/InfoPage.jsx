import React from "react";
import { Link } from "react-router-dom";
import { A } from "../data/siteData.js";
import { Navbar } from "../components/Navbar.jsx";
import { BrandMark } from "../components/BrandMark.jsx";
import { Eyebrow } from "../components/Eyebrow.jsx";

export function InfoPage({ title, subtitle }) {
  return (
    <div
      className="info-page"
      style={{
        backgroundImage: `linear-gradient(130deg,rgba(246,250,250,.94),rgba(255,249,235,.95)),url(${A}silk-road-landscape.webp)`,
      }}
    >
      <Navbar />
      <main>
        <Eyebrow>ZARIYA · HERITAGE LANGUAGES</Eyebrow>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <Link to="/" className="black-button">
          Return home <span>↗</span>
        </Link>
        <div className="info-placeholder">
          <BrandMark word />
          <p>
            This page is part of the recreated frontend. Add your final brand
            copy and connected services here.
          </p>
        </div>
      </main>
    </div>
  );
}
