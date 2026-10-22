import React from "react";
import { A } from "../data/siteData.js";
import { SectionTitle } from "../components/SectionTitle.jsx";

export function BuiltForYou() {
  const items = [
    {
      title: (
        <>
          Diaspora <em>youth</em>
        </>
      ),
      desc: "Speak Dari, Pashto, or Urdu with confidence — not just understanding, but actually speaking.",
      img: "diaspora-couple.webp",
    },
    {
      title: (
        <>
          Parents & <em>families</em>
        </>
      ),
      desc: "Teach your kids to speak with grandparents in their native language.",
      img: "grandmother-daughter.webp",
    },
    {
      title: (
        <>
          Spouses <em>& partners</em>
        </>
      ),
      desc: "Join conversations, family gatherings, and traditions without feeling left out.",
      img: "couple-tablet.webp",
    },
    {
      title: (
        <>
          Heritage <em>learners</em>
        </>
      ),
      desc: "Fill the gaps and finally speak your heritage language fluently.",
      img: "family-reading.webp",
    },
    {
      title: (
        <>
          Aid & NGO <em>workers</em>
        </>
      ),
      desc: "Learn real Dari and Pashto used in daily conversations — not textbook phrases.",
      img: "community-learning.webp",
    },
    {
      title: (
        <>
          Culture <em>enthusiasts</em>
        </>
      ),
      desc: "Access Rumi, Hafiz, and Central Asian arts in their original tongue.",
      img: "silk-road-landscape.webp",
    },
  ];
  return (
    <section id="built-for-you" className="built-section section-pad">
      <SectionTitle
        label="BUILT FOR YOU"
        title="Who is"
        italic="Zariya for?"
        description="Choose your language, learn through practical lessons, and build the confidence to use it in real conversations."
      />
      <div className="audience-grid stagger-grid">
        {items.map((item, i) => (
          <article className="audience-card fade-up" key={i}>
            <img src={`${A}${item.img}`} alt="" loading="lazy" />
            <div className="audience-shade" />
            <div className="audience-copy">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
