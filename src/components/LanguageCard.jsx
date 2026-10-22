import React from "react";
import { A } from "../data/siteData.js";

export function LanguageCard({ lang, index }) {
  const photos = [
    "silk-road-landscape.webp",
    "diaspora-couple.webp",
    "family-reading.webp",
    "grandmother-daughter.webp",
    "couple-tablet.webp",
    "community-learning.webp",
    "hands-connection.webp",
    "silk-road-landscape.webp",
  ];
  return (
    <button
      className="language-card"
      onClick={() => {
        const el = document.getElementById("get-started");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        else window.location.href = "/get-started";
      }}
    >
      <div className="language-card-image">
        <img
          src={`${A}${photos[index % photos.length]}`}
          alt=""
          loading="lazy"
        />
        <span>{lang.flag}</span>
      </div>
      <strong>{lang.name}</strong>
      <small>{lang.native}</small>
    </button>
  );
}
