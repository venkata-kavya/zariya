import React from "react";
import { Eyebrow } from "./Eyebrow.jsx";

export function SectionTitle({
  label,
  title,
  italic,
  align = "left",
  description,
}) {
  return (
    <div className={`section-heading align-${align} fade-up`}>
      {label && <Eyebrow>{label}</Eyebrow>}
      <div className="heading-row">
        <h2>
          {title} {italic && <em>{italic}</em>}
        </h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}
