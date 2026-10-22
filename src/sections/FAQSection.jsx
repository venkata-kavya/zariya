import React from "react";
import { useState } from "react";
import { faqs } from "../data/siteData.js";
import { Eyebrow } from "../components/Eyebrow.jsx";

export function FAQSection() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faqs" className="faq-section section-pad">
      <div className="faq-header fade-up">
        <Eyebrow>FAQS</Eyebrow>
        <h2>
          You’ve got questions.
          <br />
          <em>We’ve got answers.</em>
        </h2>
        <p>
          Find quick answers to help you get the most out of your learning
          experience.
        </p>
      </div>
      <div className="faq-list">
        {faqs.map((faq, i) => (
          <article
            className={`faq-item ${open === i ? "faq-open" : ""}`}
            key={faq.q}
          >
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              aria-expanded={open === i}
            >
              <span>{faq.q}</span>
              <i>{open === i ? "−" : "+"}</i>
            </button>
            <div
              className="faq-answer"
              style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
            >
              <div>
                <p>{faq.a}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
