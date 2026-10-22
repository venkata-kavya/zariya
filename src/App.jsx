import React from "react";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage.jsx";
import { AuthPage } from "./pages/AuthPage.jsx";
import { InfoPage } from "./pages/InfoPage.jsx";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<AuthPage mode="signin" />} />
      <Route path="/get-started" element={<AuthPage mode="start" />} />
      <Route
        path="/about"
        element={
          <InfoPage
            title="A language is a way home."
            subtitle="Zariya is here to keep heritage, family stories, and everyday conversations alive."
          />
        }
      />
      <Route
        path="/privacy"
        element={
          <InfoPage
            title="Privacy, with care."
            subtitle="Your learning journey should feel safe. Add the final privacy policy for your product here."
          />
        }
      />
      <Route
        path="/terms"
        element={
          <InfoPage
            title="A few ground rules."
            subtitle="These terms are placeholders for the production terms of service."
          />
        }
      />
      <Route
        path="/cancellation"
        element={
          <InfoPage
            title="Plans that fit your life."
            subtitle="Add your cancellation and refund details here when the subscription product is connected."
          />
        }
      />
      <Route
        path="/contact"
        element={
          <InfoPage
            title="We’re here to help."
            subtitle="Reach the Zariya team at hello@speakzariya.com for questions, ideas, and feedback."
          />
        }
      />
      <Route
        path="*"
        element={
          <InfoPage
            title="We couldn’t find that page."
            subtitle="The page may have moved, but your way back is easy."
          />
        }
      />
    </Routes>
  );
}
