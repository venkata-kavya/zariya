import React from "react";

export function BrandMark({ word = false, light = false }) {
  return (
    <span
      className={`brand-mark ${light ? "brand-light" : ""}`}
      aria-label="Zariya"
    >
      <svg viewBox="0 0 46 42" aria-hidden="true">
        <path d="M6 35V20C6 10.6 13.6 3 23 3s17 7.6 17 17v15" />
        <path d="M13 35V21c0-5.6 4.4-10 10-10s10 4.4 10 10v14" />
        <path d="M13 35c1-7 7-5 10-9s-1-7-4-5" />
        <circle cx="23" cy="5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
      {word && <span>Zariya</span>}
    </span>
  );
}
