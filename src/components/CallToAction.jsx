import React from "react";
import { Link } from "react-router-dom";
function CallToAction() {
  return (
    <section className="shell cta-section">
      <div className="cta-card">
        <div className="globe-mark" aria-hidden="true" />

        <div>
          <h2>Ready to start your journey?</h2>

          <p>
            Get personalized expert advice on your study abroad
            application and visa process. Join millions of students
            already studying abroad.
          </p>
        </div>

        <div className="cta-actions">
          <a
            href="mailto:advisor@abroadly.com"
            className="secondary-button"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            Contact Advisor
          </a>

          <Link
            to="/"
            className="primary-button"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;