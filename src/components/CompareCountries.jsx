import { useState } from "react";

import {
  countriesData,
} from "../data/data";

function CompareCountries() {
  const countries =
    Object.values(countriesData);

  const [country1, setCountry1] =
    useState("canada");

  const [country2, setCountry2] =
    useState("australia");

  const firstCountry =
    countriesData[country1];

  const secondCountry =
    countriesData[country2];

  return (
    <section className="compare-section shell">
      <div className="section-heading">
        <div>
          <h2>
            Compare Countries
          </h2>

          <p>
            Compare top study abroad
            destinations side by side.
          </p>
        </div>
      </div>

      <div className="compare-selectors">
        <select
          value={country1}
          onChange={(e) =>
            setCountry1(
              e.target.value
            )
          }
        >
          {countries.map((country) => (
            <option
              key={country.slug}
              value={country.slug}
            >
              {country.flag}{" "}
              {country.name}
            </option>
          ))}
        </select>

        <span className="vs-text">
          VS
        </span>

        <select
          value={country2}
          onChange={(e) =>
            setCountry2(
              e.target.value
            )
          }
        >
          {countries.map((country) => (
            <option
              key={country.slug}
              value={country.slug}
            >
              {country.flag}{" "}
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <div className="compare-grid">
        {/* LEFT */}

        <div className="compare-card">
          <img
            src={
              firstCountry.heroImage
            }
            alt={
              firstCountry.name
            }
          />

          <h3>
            {firstCountry.flag}{" "}
            {firstCountry.name}
          </h3>

          <div className="compare-info">
            <p>
              <strong>
                ROI:
              </strong>{" "}
              {firstCountry.roi}
            </p>

            <p>
              <strong>
                Top City:
              </strong>{" "}
              {
                firstCountry
                  .cities?.[0]
                  ?.name
              }
            </p>

            <p>
              <strong>
                Top University:
              </strong>{" "}
              {
                firstCountry
                  .universities?.[0]
                  ?.name
              }
            </p>

            <p>
              <strong>
                Tuition:
              </strong>{" "}
              {
                firstCountry
                  .facts?.[1]
                  ?.value
              }
            </p>
          </div>
        </div>

        {/* RIGHT */}

        <div className="compare-card">
          <img
            src={
              secondCountry.heroImage
            }
            alt={
              secondCountry.name
            }
          />

          <h3>
            {secondCountry.flag}{" "}
            {secondCountry.name}
          </h3>

          <div className="compare-info">
            <p>
              <strong>
                ROI:
              </strong>{" "}
              {secondCountry.roi}
            </p>

            <p>
              <strong>
                Top City:
              </strong>{" "}
              {
                secondCountry
                  .cities?.[0]
                  ?.name
              }
            </p>

            <p>
              <strong>
                Top University:
              </strong>{" "}
              {
                secondCountry
                  .universities?.[0]
                  ?.name
              }
            </p>

            <p>
              <strong>
                Tuition:
              </strong>{" "}
              {
                secondCountry
                  .facts?.[1]
                  ?.value
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompareCountries;