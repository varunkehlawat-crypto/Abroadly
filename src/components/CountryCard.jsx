import React from "react";
import { Link } from "react-router-dom";
function CountryCard({ country }) {
  return (
<article className="country-card">
  <div className="country-image-wrapper">
    <img
      src={country.heroImage}
      alt={`${country.name} study abroad destination`}
      className="country-image"
    />

    <div className="country-image-overlay" />

    <div className="country-image-content">
      <span className="country-flag">
        {country.flag}
      </span>

      <div>
        <p>
          Explore Global Opportunities
        </p>
      </div>
    </div>
  </div>

  <div className="country-content">
    <p className="country-tagline">
      {country.tagline}
    </p>

    <div className="country-highlights">
      {country.cities
        ?.slice(0, 2)
        .map((city) => (
          <span key={city.name}>
            {city.name}
          </span>
        ))}

      <span>Top Universities</span>

      <span>Career Growth</span>
    </div>

        <Link
          to={`/country/${country.slug}`}
          className="primary-button"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
          }}
        >
          Explore
        </Link>
      </div>
    </article>
  );
}

export default CountryCard;