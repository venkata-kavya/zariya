import React from "react";
import { Link } from "react-router-dom";
import { A, languages } from "../data/siteData.js";
import { BrandMark } from "../components/BrandMark.jsx";
import { Eyebrow } from "../components/Eyebrow.jsx";
import { LanguageTicker } from "../components/LanguageTicker.jsx";
import { LanguageCard } from "../components/LanguageCard.jsx";

export function LanguageSection({ paused, setPaused }) {
  return (
    <section id="languages" className="languages-section section-pad">
      <div className="script-text" aria-hidden="true">
        سلام · زبان · խոսել · ભાષા · language · lingua · язык · زبان · խոսել ·
        ભાષા · سلام · լեզու · زبانی · மொழி · زبان
      </div>
      <div className="language-head fade-up">
        <Eyebrow>LANGUAGES OF THE SILK ROAD</Eyebrow>
        <h2>
          <span>28 Languages.</span>
          <em>One world closer.</em>
        </h2>
        <p>
          Over 1000 of lessons, thousands of words and phrases used in everyday
          <br className="desktop-break" /> conversation to ensure you leave
          confident speaking your language.
        </p>
        <div className="language-collage">
          <img
            className="collage-person"
            src={`${A}diaspora-couple.webp`}
            alt="A young language learner"
          />
          <img
            className="collage-scenery"
            src={`${A}silk-road-landscape.webp`}
            alt="Silk Road mountain landscape"
          />
          <div className="collage-logo">
            <BrandMark word />
          </div>
        </div>
      </div>
      <LanguageTicker
        paused={paused}
        setPaused={setPaused}
        firstTrack={languages.slice(0, 14)}
        secondTrack={languages.slice(14)}
      />
      <div className="language-section-bottom">
        <Link className="black-button" to="/get-started">
          Choose your language <span>↗</span>
        </Link>
      </div>
      <div className="language-grid-wrap fade-up">
        <p className="micro-label">A few ways to begin</p>
        <div className="language-grid">
          {languages.slice(0, 8).map((lang, i) => (
            <LanguageCard lang={lang} index={i} key={lang.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
