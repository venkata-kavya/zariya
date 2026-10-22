import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const HERO_LANGUAGES = [
  { name: "Punjabi", code: "PK" },
  { name: "Pashto", code: "PK" },
  { name: "Dari", code: "AF" },
  { name: "Urdu", code: "PK" },
  { name: "Arabic", code: "SA" },
  { name: "Gujarati", code: "IN" },
  { name: "Bengali", code: "BD" },
  { name: "Persian", code: "IR" },
];

export function RotatingHeroLanguage() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!track || reduceMotion) return undefined;

    let timeline;

    // Measure the rendered row instead of relying on percentage offsets. This keeps
    // descenders such as the "j" in Punjabi inside the clipped viewport at all sizes.
    const getRowHeight = () => {
      const firstRow = track.querySelector(".hero-language-item");
      return firstRow?.getBoundingClientRect().height ?? 0;
    };

    const buildTimeline = () => {
      timeline?.kill();
      gsap.set(track, { y: 0 });

      timeline = gsap.timeline({
        repeat: -1,
        delay: 0.8,
        defaults: { overwrite: "auto" },
      });

      HERO_LANGUAGES.forEach((_, index) => {
        timeline.to(
          track,
          {
            // Only the inner track is moved. The slot, pill, and its background
            // are never animated, resized, or repositioned.
            y: () => -(getRowHeight() * (index + 1)),
            duration: 0.42,
            ease: "power2.inOut",
          },
          index === 0 ? 1.25 : "+=1.5",
        );
      });

      // The last visible row duplicates Punjabi, so this reset is visually seamless.
      timeline.call(() => gsap.set(track, { y: 0 }));
    };

    buildTimeline();

    // Rebuild at a changed viewport size so the pixel travel still matches the
    // actual row height after responsive typography changes.
    let resizeFrame = 0;
    const handleResize = () => {
      window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(buildTimeline);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(resizeFrame);
      timeline?.kill();
      gsap.set(track, { clearProps: "transform" });
    };
  }, []);

  return (
    <span className="hero-language-slot">
      <span
        className="hero-language-pill"
        aria-label="Featured heritage language"
      >
        <span className="hero-language-viewport" aria-hidden="true">
          <span className="hero-language-track" ref={trackRef}>
            {[...HERO_LANGUAGES, HERO_LANGUAGES[0]].map((language, index) => (
              <span
                className="hero-language-item"
                key={`${language.name}-${index}`}
              >
                <em>{language.name}</em>
                <b className="hero-language-code">{language.code}</b>
              </span>
            ))}
          </span>
        </span>
      </span>
    </span>
  );
}
