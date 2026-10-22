import React from "react";
import { Link } from "react-router-dom";
import { A } from "../data/siteData.js";

export function FinalCTA() {
  return (
    <section
      id="get-started"
      className="final-cta"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(29,70,102,.06), rgba(13,44,56,.15)), url(${A}silk-road-landscape.webp)`,
      }}
    >
      <div className="cta-copy fade-up">
        <h2>
          Start <em>your journey</em>
        </h2>
        <p>
          1000s of lessons from your first words to real conversations.
          <br />
          Learn the way people actually speak.
        </p>
        <Link className="black-button" to="/get-started">
          Start learning for free <span>↗</span>
        </Link>
      </div>
      <div className="cta-walker" aria-hidden="true">
        <div className="walker-head" />
        <div className="walker-body" />
        <div className="walker-leg left" />
        <div className="walker-leg right" />
      </div>
    </section>
  );
}
