import React from "react";
import { A } from "../data/siteData.js";
import { SectionTitle } from "../components/SectionTitle.jsx";

export function MissionSection() {
  return (
    <section id="mission" className="mission-section section-pad">
      <SectionTitle
        label="OUR MISSION"
        title="Why we"
        italic="built Zariya"
        description="Millions speak these languages — but few apps teach them right. Zariya changes that."
      />
      <div className="mission-grid stagger-grid">
        <article className="mission-card mission-large fade-up">
          <img
            src={`${A}family-reading.webp`}
            alt="A family reading together at home"
            loading="lazy"
          />
          <div className="card-shade" />
          <div className="mission-copy">
            <h3>
              Preserve <em>your heritage</em>
            </h3>
            <p>
              Learn Dari, Pashto, Urdu, and more — and pass them on to the next
              generation.
            </p>
          </div>
        </article>
        <article className="mission-card mission-hands fade-up">
          <img
            src={`${A}hands-connection.webp`}
            alt="Two hands reaching toward one another"
            loading="lazy"
          />
          <div className="mission-copy">
            <h3>
              Stay connected <em>to family</em>
            </h3>
            <p>
              Understand parents, grandparents, and relatives without
              translation.
            </p>
          </div>
        </article>
        <article className="mission-card mission-practice fade-up">
          <div className="practice-ui" aria-hidden="true">
            <div className="practice-pills">
              <span>🇵🇰 Urdu</span>
              <span>🇦🇫 Pashto</span>
              <span>🇮🇳 Punjabi</span>
            </div>
            <div className="chat-line">
              <b>👩🏻</b>
              <span>how are you?</span>
              <span className="chat-play">▶</span>
            </div>
            <div className="practice-wave">〰〰〰〰〰〰〰</div>
          </div>
          <div className="mission-copy">
            <h3>
              Learn the <em>real languages</em>
            </h3>
            <p>
              Learn how people actually speak — real phrases, real
              pronunciation, real life.
            </p>
          </div>
        </article>
        <article className="mission-card mission-community fade-up">
          <div className="community-art" aria-hidden="true">
            <svg viewBox="0 0 550 150" preserveAspectRatio="xMidYMid meet">
              <path
                d="M18 83 Q85 12 155 65 T291 64 T420 55 T535 70"
                fill="none"
                stroke="#91b7d1"
                strokeWidth="2"
                opacity=".65"
              />
              <path
                d="M20 95 Q90 30 160 80 T300 80 T440 70 T540 80"
                fill="none"
                stroke="#d9c9a7"
                strokeWidth="2"
                opacity=".7"
              />
            </svg>
            <div className="community-people">
              <img src={`${A}diaspora-couple.webp`} alt="" />
              <img src={`${A}couple-tablet.webp`} alt="" />
              <img src={`${A}grandmother-daughter.webp`} alt="" />
              <img src={`${A}community-learning.webp`} alt="" />
            </div>
          </div>
          <div className="mission-copy">
            <h3>
              An underserved community, <em>finally served</em>
            </h3>
            <p>
              Zariya is designed for underserved communities across the Silk
              Road.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
