import React from "react";
import { A, languages } from "../data/siteData.js";
import { Eyebrow } from "../components/Eyebrow.jsx";

export function HowItWorks() {
  const cards = [
    {
      n: "01",
      title: (
        <>
          Choose <em>your language</em>
        </>
      ),
      desc: "Pick from 28 languages and start at the level that’s right for you.",
      type: "choose",
    },
    {
      n: "02",
      title: (
        <>
          Learn a little <em>every day</em>
        </>
      ),
      desc: "Build vocabulary through guided lessons, flashcards, pronunciation, and practice.",
      type: "learn",
    },
    {
      n: "03",
      title: (
        <>
          Speak <em>with confidence</em>
        </>
      ),
      desc: "Turn what you learn into everyday conversations and track your progress along the way.",
      type: "speak",
    },
  ];
  return (
    <section id="how-it-works" className="how-section section-pad">
      <div className="center-section-heading fade-up">
        <Eyebrow>HOW IT WORKS</Eyebrow>
        <h2>
          Your simplest path to
          <br />
          <em>a new language.</em>
        </h2>
        <p>
          Choose your language, learn through practical lessons, and build the
          <br className="desktop-break" /> confidence to use it in real
          conversations.
        </p>
      </div>
      <div className="how-grid stagger-grid">
        {cards.map((card, i) => (
          <article className={`how-card how-${card.type} fade-up`} key={card.n}>
            <span className="step-number">{card.n}</span>
            <div className="how-visual">
              {card.type === "choose" && (
                <div className="phone-mock">
                  <div className="phone-island" />
                  <p>
                    Which language do you
                    <br />
                    want to learn?
                  </p>
                  {languages.slice(0, 4).map((l, j) => (
                    <div className="phone-option" key={l.name}>
                      <span>{l.flag}</span>
                      {l.name}
                      <i className={j === 0 ? "selected" : ""} />
                    </div>
                  ))}
                </div>
              )}
              {card.type === "learn" && (
                <div className="lesson-mock">
                  <div className="lesson-top">
                    <span>◉ Play audio</span>
                    <span>♡</span>
                  </div>
                  <p>Complete the phrase</p>
                  <div className="lesson-choice">
                    Salam <b>✓</b>
                  </div>
                  <div className="lesson-choice">Tashakor</div>
                  <div className="lesson-choice">Khush amadid</div>
                  <div className="lesson-progress">
                    <span />
                  </div>
                </div>
              )}
              {card.type === "speak" && (
                <>
                  <img
                    className="speak-photo"
                    src={`${A}testimonial-sandra.webp`}
                    alt="A learner practicing speaking"
                    loading="lazy"
                  />
                  <div className="speak-floating">
                    <span>✓</span> Speak confidently
                  </div>
                  <div className="speak-card">
                    Hello <em>سلام</em>
                    <div>▁▃▅▂▇▅▃▆▂</div>
                  </div>
                </>
              )}
            </div>
            <div className="how-copy">
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
