import React from "react";
import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import {
  countriesData,
} from "../data/data";

function UniversityDetails() {
  const { name } = useParams();

  const [apiData, setApiData] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  /* ALL UNIVERSITIES */

  const allUniversities =
    Object.values(
      countriesData
    ).flatMap((country) =>
      country.universities.map(
        (university) => ({
          ...university,

          country:
            country.name,

          countryFlag:
            country.flag,
        })
      )
    );

  /* FIND CURRENT UNIVERSITY */

  const university =
    allUniversities.find(
      (uni) =>
        uni.name
          .toLowerCase()
          .replace(/\s+/g, "-") ===
        name
    );

  /* FETCH REAL API DATA */

  useEffect(() => {
    async function fetchUniversity() {
      try {
        const response =
          await fetch(
            `http://universities.hipolabs.com/search?name=${university.name}`
          );

        const data =
          await response.json();

        setApiData(data[0]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    if (university) {
      fetchUniversity();
    }
  }, [university]);

  /* NOT FOUND */

  if (!university) {
    return (
      <section className="shell">
        <h1>
          University not found.
        </h1>
      </section>
    );
  }

  /* LOADING */

  if (loading) {
    return (
      <section className="shell">
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <section className="university-details shell">
      {/* HERO */}

      <div className="university-hero">
        <img
          src={university.image}
          alt={university.name}
        />

        <div className="university-hero-overlay" />

        <div className="university-hero-content">
          <span>
            {university.countryFlag}{" "}
            {university.country}
          </span>

          <h1>
            {university.name}
          </h1>

          <p>
            {university.rank}
          </p>
        </div>
      </div>

      {/* GRID */}

      <div className="university-details-grid">
        {/* ABOUT */}

        <div className="details-card">
          <h3>
            About University
          </h3>

          <p>
            {
              university.description
            }
          </p>
        </div>

        {/* WEBSITE */}

        <div className="details-card">
          <h3>
            Official Website
          </h3>

          <a
            href={
              apiData?.web_pages?.[0]
            }
            target="_blank"
            rel="noreferrer"
          >
            Visit Website
          </a>
        </div>

        {/* DOMAIN */}

        <div className="details-card">
          <h3>Domain</h3>

          <p>
            {
              apiData?.domains?.[0]
            }
          </p>
        </div>

        {/* COUNTRY */}

        <div className="details-card">
          <h3>Country</h3>

          <p>
            {
              apiData?.country
            }
          </p>
        </div>

        {/* TAGS */}

        <div className="details-card">
          <h3>
            Popular Fields
          </h3>

          <div className="details-tags">
            {university.tags.map(
              (tag) => (
                <span key={tag}>
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* RANK */}

        <div className="details-card">
          <h3>
            Global Ranking
          </h3>

          <p>
            {university.rank}
          </p>
        </div>
      </div>
    </section>
  );
}

export default UniversityDetails;