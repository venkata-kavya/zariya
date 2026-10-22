import React from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { A } from "../data/siteData.js";
import { Navbar } from "../components/Navbar.jsx";
import { RotatingHeroLanguage } from "../components/RotatingHeroLanguage.jsx";
import { Footer } from "../components/Footer.jsx";
import { useScrollAnimations } from "../hooks/useScrollAnimations.js";
import { LanguageSection } from "../sections/LanguageSection.jsx";
import { MissionSection } from "../sections/MissionSection.jsx";
import { HowItWorks } from "../sections/HowItWorks.jsx";
import { BuiltForYou } from "../sections/BuiltForYou.jsx";
import { StoriesSection } from "../sections/StoriesSection.jsx";
import { FAQSection } from "../sections/FAQSection.jsx";
import { FinalCTA } from "../sections/FinalCTA.jsx";

export function LandingPage() {
  const mainRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useScrollAnimations(mainRef);

  useEffect(() => {
    if (!window.location.hash) return undefined;
    const timeout = window.setTimeout(() => {
      document
        .querySelector(window.location.hash)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 120);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div className="app-shell" ref={mainRef}>
      <Navbar />
      <main>
        <section className="hero">
          <div className="hero-glow" />
          <div
            className="hero-landscape"
            style={{ backgroundImage: `url(${A}silk-road-landscape.webp)` }}
          />
          <div className="hero-content">
            <span className="hero-overline">
              LANGUAGES OF THE SILK ROAD · CULTURE THAT CONNECTS
            </span>
            <h1 className="hero-title hero-kinetic-title">
              <span className="hero-title-line">
                <span>Learn</span>
                <RotatingHeroLanguage />
                <span className="hero-title-tail">&amp; heritage</span>
              </span>
              <span className="hero-title-line hero-title-line-last">
                languages
              </span>
            </h1>
            <div className="hero-actions">
              <Link className="black-button" to="/get-started">
                Start learning for free <span>↗</span>
              </Link>
              <a className="outline-button" href="#how-it-works">
                <span className="play-icon">▶</span> See how it works
              </a>
            </div>
          </div>
          <p className="hero-description">
            Zariya is the heritage language app for Dari, Pashto, Urdu, Punjabi,
            and more — taught in the dialects your family actually speaks.
          </p>
          <div className="hero-rating">
            <div className="avatar-row">
              <img src={`${A}testimonial-sandra.webp`} alt="" />
              <img src={`${A}grandmother-daughter.webp`} alt="" />
              <img src={`${A}diaspora-couple.webp`} alt="" />
            </div>
            <div>
              <strong>
                2.2k reviews <span className="stars">★★★★★</span>
              </strong>
              <small>Loved by learners around the world</small>
            </div>
          </div>
          <img
            className="hero-product-art"
            src={`${A}zariya-hero-phones.png`}
            alt="Zariya language learning app shown on three phones with language and speaking practice cards"
            fetchPriority="high"
          />
          <div className="hero-bottom-note">
            <span>01 / THE SILK ROAD</span>
            <span>Culture is a conversation.</span>
            <span>Scroll to explore ↓</span>
          </div>
        </section>
        <LanguageSection paused={paused} setPaused={setPaused} />
        <MissionSection />
        <HowItWorks />
        <BuiltForYou />
        <StoriesSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <a
        className="report-issue"
        href="mailto:hello@speakzariya.com?subject=Website%20feedback"
      >
        Report an issue
      </a>
    </div>
  );
}
