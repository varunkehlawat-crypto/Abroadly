import { countriesData } from "../data/data";

import { Link } from "react-router-dom";

import { useWishlist } from "../context/WishlistContext";
function Universities() {
  const { addToWishlist, removeFromWishlist, isSaved } = useWishlist();

  const universities = Object.values(countriesData).flatMap((country) =>
    country.universities.map((university) => ({
      ...university,

      country: country.name,

      countryFlag: country.flag,
    })),
  );

  return (
    <section className="universities-page shell">
      <div className="universities-header">
        <h1>Global Universities</h1>

        <p>Explore top universities from leading study abroad destinations.</p>
      </div>

      <div className="universities-grid">
        {universities.map((university) => (
          <Link
            to={`/university/${university.name
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
            className="university-link"
            key={university.name}
            onClick={() => {
              window.scrollTo({
                top: 0,

                behavior: "smooth",
              });
            }}
          >
            <article className="university-card">
              <div className="university-image-wrapper">
                <img
                  src={university.image}
                  alt={university.name}
                  className="university-image"
                />
                                <button
                  className={`wishlist-button ${
                    isSaved(university.name) ? "saved" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();

                    e.stopPropagation();

                    if (isSaved(university.name)) {
                      removeFromWishlist(university.name);
                    } else {
                      addToWishlist(university);
                    }
                  }}
                >
                  <span className="material-symbols-outlined">
                    {isSaved(university.name) ? "favorite" : "favorite"}
                  </span>
                </button>

                <div className="university-overlay" />
              </div>

              <div className="university-content">
                <span className="university-country">
                  {university.countryFlag} {university.country}
                </span>

                <h3>{university.name}</h3>

                <p className="university-rank">{university.rank}</p>

                <p className="university-description">
                  {university.description}
                </p>

                <div className="university-tags">
                  {university.tags?.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Universities;
