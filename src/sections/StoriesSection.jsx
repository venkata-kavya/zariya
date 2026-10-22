import React from "react";
import { useState } from "react";
import { A, stories } from "../data/siteData.js";

export function StoriesSection() {
  const [active, setActive] = useState(0);
  const story = stories[active];
  const step = (dir) =>
    setActive((n) => (n + dir + stories.length) % stories.length);
  return (
    <section className="stories-section section-pad" id="stories">
      <div className="stories-title fade-up">
        <h2>
          Real People <em>Real Results</em>
        </h2>
        <span className="story-counter">
          0{active + 1} <i>/</i> 0{stories.length}
        </span>
      </div>
      <div className="testimonial-stage">
        <div className="testimonial-stack stack-back" aria-hidden="true">
          <img
            src={`${A}${stories[(active + 1) % stories.length].image}`}
            alt=""
          />
        </div>
        <div className="testimonial-stack stack-mid" aria-hidden="true">
          <img
            src={`${A}${stories[(active + 2) % stories.length].image}`}
            alt=""
          />
        </div>
        <article className="testimonial-card" key={story.name}>
          <img
            className="testimonial-image"
            src={`${A}${story.image}`}
            alt={`${story.name}, ${story.role}`}
          />
          <div className="testimonial-gradient" />
          <div className="testimonial-name">
            <strong>{story.name}</strong>
            <div className="stars" aria-label="5 out of 5 stars">
              ★★★★★
            </div>
          </div>
        </article>
      </div>
      <div className="testimonial-caption" key={`caption-${active}`}>
        <p>{story.quote}</p>
        <div className="stars small-stars">★★★★★</div>
        <span>{story.place}</span>
      </div>
      <div className="story-controls">
        <button onClick={() => step(-1)} aria-label="Previous story">
          ←
        </button>
        <div className="story-dots">
          {stories.map((s, i) => (
            <button
              key={s.name}
              className={i === active ? "active" : ""}
              aria-label={`Show story ${i + 1}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
        <button onClick={() => step(1)} aria-label="Next story">
          →
        </button>
      </div>
    </section>
  );
}
