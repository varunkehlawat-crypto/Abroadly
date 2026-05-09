import { Link } from "react-router-dom";

import { countriesData } from "../data/data";


function Countries({ search }) {
  const countries = Object.values(countriesData);


  /* FILTER */

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="countries" id="countries">
      <div className="shell">
        {/* HEADER */}

        <div className="section-heading">
          <div>
            <h2>Explore Countries</h2>

            <p>
              Strategic destinations for global excellence and career growth.
            </p>
          </div>
        </div>

        {/* EMPTY */}

        {filteredCountries.length === 0 && (
          <div className="empty-state">
            <h2>No countries found</h2>

            <p>Try another search.</p>
          </div>
        )}

        {/* GRID */}

        <div className="country-grid">
          {filteredCountries.map((country) => (
            <Link
              key={country.slug}
              to={`/country/${country.slug}`}
              className="country-link"
            >
              <article className="country-card">
                {/* IMAGE */}

                <div className="country-image-wrapper">
                  <img
                    src={country.heroImage}
                    alt={country.flag}
                    className="country-image"
                  />

                  <div className="country-image-overlay" />

                  <div className="country-image-content">
                    <div className="country-flag">{country.flag}</div>

                    <p>Explore Global Opportunities</p>
                  </div>
                </div>

                {/* CONTENT */}

                <div className="country-content">
                  <h3>{country.name}</h3>
                  <p>{country.tagline}</p>

                  <div className="country-highlights">
                    {country.tags?.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </div>

                 <button className="primary-button">
                    Explore
                  </button>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Countries;
