import React from "react";
import { useState } from "react";
function Hero({
  search,
  setSearch,
}) {
  const [
    selectedProgram,
    setSelectedProgram,
  ] = useState("");

  return (
    <section
      className="hero"
      id="top"
    >
      <div className="shell hero-inner">
        <h1>
          Find Your Perfect{" "}
          <span>
            Study Abroad
          </span>{" "}
          Destination
        </h1>

        <p>
          Compare countries,
          explore universities,
          estimate living costs,
          and build your global
          future with
          data-driven insights.
        </p>

        <form
          className="search-panel"
          onSubmit={(event) =>
            event.preventDefault()
          }
        >
          {/* SEARCH */}

          <label className="field">
            <span aria-hidden="true">
              ⌕
            </span>

            <input
              type="search"
              placeholder="Search countries..."
              aria-label="Search countries"
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
            />
          </label>

          {/* PROGRAM SELECT */}

          <label className="field select-field">
            <span aria-hidden="true">
              □
            </span>

            <select
              className="program-select"
              aria-label="Select preferred program"
              value={
                selectedProgram
              }
              onChange={(e) =>
                setSelectedProgram(
                  e.target.value
                )
              }
            >
              <option value="">
                Select Preferred
                Program
              </option>

              <option value="Engineering">
                Engineering
              </option>

              <option value="Business">
                Business
              </option>

              <option value="Computer Science">
                Computer Science
              </option>

              <option value="Medicine">
                Medicine
              </option>

              <option value="Law">
                Law
              </option>

              <option value="Arts">
                Arts
              </option>
            </select>
          </label>

          {/* BUTTON */}

          <button
            className="primary-button large-button"
            type="submit"
            onClick={() => {
              document
                .getElementById(
                  "countries"
                )
                ?.scrollIntoView({
                  behavior:
                    "smooth",
                });
            }}
          >
            Search Now
          </button>
        </form>
      </div>
    </section>
  );
}

export default Hero;