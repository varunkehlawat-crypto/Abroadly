import React from "react";
import { Link, useParams } from "react-router-dom";
import { countriesData } from "../data/data";
function CountryDetails() {
  const { slug } = useParams();

  const country = countriesData[slug];

  if (!country) {
    return (
      <div className="shell" style={{ padding: "140px 0" }}>
        <h1>Country not found</h1>
      </div>
    );
  }

  return (
    <div className="country-page">
      {/* TOP NAV */}

      <header className="country-topbar">
        <div className="shell topbar-inner">
          {/* LEFT */}

          <div className="topbar-left">
            <Link to="/" className="brand-logo">
              <div className="brand-icon">
                <span className="material-symbols-outlined">
                  flight_takeoff
                </span>
              </div>

              <span>Abroadly</span>
            </Link>
          </div>
          {/* CENTER */}

          <nav className="premium-nav-links">
            <a href="#facts">Quick Facts</a>

            <a href="#cities">Top Cities</a>

            <a href="#universities">Universities</a>

            <a href="#visa">Visa Guide</a>
          </nav>

          {/* RIGHT */}

          <button className="journey-button">Plan Journey</button>
        </div>
      </header>

      {/* HERO */}

      <section className="country-hero">
        <img src={country.heroImage} alt={country.name} />

        <div className="hero-overlay" />

        <div className="shell hero-content">
          <div className="hero-text">
            <span className="hero-badge">DESTINATION PROFILE</span>

            <h1>
              Study in <span>{country.name}</span>
            </h1>

            <p>{country.tagline}</p>
          </div>
        </div>
      </section>

      {/* FACTS */}

      <section className="premium-stats-section shell" id="facts">
        <div className="premium-stats-bar">
          {country.facts?.map((fact) => (
            <div className="premium-stat-item" key={fact.title}>
              <div
                className="premium-stat-icon"
                style={{
                  background: `${fact.color}15`,
                  border: `1px solid ${fact.color}20`,
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    color: fact.color,
                  }}
                >
                  {fact.icon}
                </span>
              </div>

              <div className="premium-stat-content">
                <h3>{fact.value}</h3>

                <p>{fact.title}</p>
              </div>

              <div className="stat-divider" />
            </div>
          ))}
        </div>
      </section>

      {/* CITIES */}

      <section className="premium-cities-section shell" id="cities">
        <div className="cities-header">
          <div>
            <h2>Top Student Cities</h2>

            <p>Discover {country.name}'s most vibrant student destinations.</p>
          </div>
        </div>

        <div className="premium-city-grid">
          {country.cities?.map((city) => (
            <div className="premium-city-card" key={city.name}>
              <img src={city.image} alt={city.name} />

              <div className="city-overlay" />

              <div className="city-content">
                <div className="city-bottom">
                  <div>
                    <h3>{city.name}</h3>

                    <p>{city.region}</p>
                  </div>

                  <button>
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UNIVERSITIES */}

      <section className="country-section shell" id="universities">
        <div className="section-header">
          <div>
            <h2>Premier Institutions</h2>

            <p>Top ranked universities and research centers.</p>
          </div>

          <Link to="/universities" className="explore-button">
            Explore all institutions →
          </Link>
        </div>

        <div className="country-universities-grid">
          {country.universities?.map((uni) => (
            <div className="country-university-card" key={uni.name}>
              <div className="country-university-image-wrapper">
                <img
                  className="country-university-image"
                  src={uni.image}
                  alt={uni.name}
                />
              </div>

              <div className="country-university-content">
                <div className="country-university-top">
                  <h3>{uni.name}</h3>

                  <span>{uni.rank}</span>
                </div>

                <p>{uni.description}</p>

                <div className="country-university-tags">
                  {uni.tags?.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}

      <section className="shell country-cta">
        <div className="country-cta-card">
          <h2>Start Your {country.name} Application Today</h2>

          <p>
            Get expert guidance on scholarships, visas, and university
            applications.
          </p>

          <div className="cta-actions">
            <button className="primary-button">Apply Now</button>

            <button className="secondary-button">Talk to an Expert</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CountryDetails;
