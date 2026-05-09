import React from "react";
function Footer() {
  const columns = {
    Platform: ["Countries", "Universities", "Scholarships"],
    Partners: [
      "University Partnerships",
      "Contact Advisor",
      "Careers",
    ],
    Legal: ["Privacy Policy", "Terms of Service"],
  };

  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div className="footer-brand">
          <a className="brand" href="#top">
            Abroadly
          </a>

          <p>
            Empowering students to unlock their global potential
            through expert-guided education pathways.
          </p>

          <div className="social-links" aria-label="Social links">
            <a href="#" aria-label="Student community">
              ◇
            </a>

            <a href="#" aria-label="Share Abroadly">
              ↗
            </a>
          </div>
        </div>

        <div className="footer-columns">
          {Object.entries(columns).map(([title, links]) => (
            <div key={title}>
              <h3>{title}</h3>

              {links.map((link) => (
                <a href="#" key={link}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="shell footer-bottom">
        <p>© 2024 Abroadly. Your gateway to global education.</p>
      </div>
    </footer>
  );
}

export default Footer;