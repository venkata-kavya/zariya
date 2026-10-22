import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function LanguageTicker({ paused, setPaused, firstTrack, secondTrack }) {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const animations = useRef([]);
  useEffect(() => {
    animations.current = [];
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return undefined;
    if (firstRef.current)
      animations.current.push(
        gsap.to(firstRef.current, {
          xPercent: -50,
          duration: 46,
          ease: "none",
          repeat: -1,
        }),
      );
    if (secondRef.current)
      animations.current.push(
        gsap.fromTo(
          secondRef.current,
          { xPercent: -50 },
          { xPercent: 0, duration: 52, ease: "none", repeat: -1 },
        ),
      );
    animations.current.forEach((anim) => anim.paused(paused));
    return () => animations.current.forEach((anim) => anim.kill());
  }, []);
  useEffect(() => {
    animations.current.forEach((anim) => anim.paused(paused));
  }, [paused]);
  const track = (set, rowRef, key) => (
    <div className="ticker-window" key={key}>
      <div className="ticker-track" ref={rowRef}>
        {[...set, ...set].map((lang, i) => (
          <span className="language-pill" key={`${lang.name}-${i}`}>
            {lang.name} <span className="flag">{lang.flag}</span>
          </span>
        ))}
      </div>
    </div>
  );
  return (
    <div className="ticker-area">
      {track(firstTrack, firstRef, "a")}
      {track(secondTrack, secondRef, "b")}
      <button
        className="pause-ticker"
        onClick={() => setPaused((v) => !v)}
        aria-pressed={paused}
      >
        <span>{paused ? "▶" : "Ⅱ"}</span>{" "}
        {paused ? "Resume animations" : "Pause animations"}
      </button>
    </div>
  );
}
