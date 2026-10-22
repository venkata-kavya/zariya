import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { A, languages } from "../data/siteData.js";
import { Navbar } from "../components/Navbar.jsx";
import { BrandMark } from "../components/BrandMark.jsx";
import { Eyebrow } from "../components/Eyebrow.jsx";

export function AuthPage({ mode }) {
  const [submitted, setSubmitted] = useState(false);
  const [language, setLanguage] = useState("Dari");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isStart = mode === "start";
  return (
    <div
      className="form-page"
      style={{
        backgroundImage: `linear-gradient(140deg,rgba(244,249,250,.9),rgba(254,250,239,.96)),url(${A}silk-road-landscape.webp)`,
      }}
    >
      <Navbar />
      <div className="form-card">
        <Link className="form-brand" to="/">
          <BrandMark word />
        </Link>
        {submitted ? (
          <div className="form-success">
            <div className="success-check">✓</div>
            <h1>
              {isStart
                ? "Your journey starts here."
                : "You’re on your way back."}
            </h1>
            <p>
              {isStart
                ? `We’ve saved ${language} as your preferred language for this demo. Connect an auth backend to enable account creation.`
                : "This interactive demo validated the form. Connect your authentication provider to finish signing in."}
            </p>
            <Link className="black-button" to="/">
              Back to Zariya <span>↗</span>
            </Link>
          </div>
        ) : (
          <>
            <Eyebrow>
              {isStart ? "A MORE CONNECTED TOMORROW" : "WELCOME BACK"}
            </Eyebrow>
            <h1>
              {isStart ? (
                <>
                  Start your <em>language journey.</em>
                </>
              ) : (
                <>
                  Welcome <em>back.</em>
                </>
              )}
            </h1>
            <p className="form-intro">
              {isStart
                ? "Choose a language and make space for the conversations that matter."
                : "Pick up where you left off and keep your culture close."}
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (
                  email.trim() &&
                  (!isStart || password.length >= 6) &&
                  (isStart || password)
                )
                  setSubmitted(true);
              }}
            >
              {isStart && (
                <label>
                  Which language would you like to learn?
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  >
                    {languages.map((l) => (
                      <option key={l.name}>{l.name}</option>
                    ))}
                  </select>
                </label>
              )}
              <label>
                Email address
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  placeholder={
                    isStart ? "At least 6 characters" : "Your password"
                  }
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={isStart ? 6 : 1}
                  required
                />
              </label>
              <button type="submit" className="black-button">
                {isStart ? "Create your free account" : "Sign in"}{" "}
                <span>↗</span>
              </button>
            </form>
            <p className="switch-auth">
              {isStart ? "Already learning with us?" : "New to Zariya?"}{" "}
              <Link to={isStart ? "/signin" : "/get-started"}>
                {isStart ? "Sign in" : "Start learning free"}
              </Link>
            </p>
            <p className="demo-note">
              Demo frontend — authentication needs to be connected to a backend.
            </p>
          </>
        )}
      </div>
      <Link to="/" className="form-back">
        ← Return to the homepage
      </Link>
    </div>
  );
}
