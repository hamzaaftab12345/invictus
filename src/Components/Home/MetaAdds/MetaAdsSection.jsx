import React from "react";
import { MetaFeatureCard } from "./MetaFeatureCard";

export function MetaAdsSection({ title, subtitle, features }) {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">
        <span className="fw-normal">{title}</span>{" "}
        <span className="fst-italic">{subtitle}</span>
      </h2>
      <div className="row g-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center"
          >
            <MetaFeatureCard {...feature} />
          </div>
        ))}
      </div>
    </div>
  );
}
