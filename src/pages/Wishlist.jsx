import { Link } from "react-router-dom";

import {
  useWishlist,
} from "../context/WishlistContext";

function Wishlist() {
  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();

  return (
    <section className="universities-page shell">
      <div className="universities-header">
        <h1>
          Saved Universities
        </h1>

        <p>
          Your personalized
          university wishlist.
        </p>
      </div>

      {wishlist.length === 0 && (
        <div className="empty-state">
          <h2>
            No saved universities
          </h2>

          <p>
            Start saving
            universities to see
            them here.
          </p>
        </div>
      )}

      <div className="universities-grid">
        {wishlist.map(
          (university) => (
            <article
              className="university-card"
              key={
                university.name
              }
            >
              <div className="university-image-wrapper">
                <img
                  src={
                    university.image
                  }
                  alt={
                    university.name
                  }
                  className="university-image"
                />

                <button
                  className="wishlist-button saved"
                  onClick={() =>
                    removeFromWishlist(
                      university.name
                    )
                  }
                >
                  <span className="material-symbols-outlined">
                    favorite
                  </span>
                </button>

                <div className="university-overlay" />
              </div>

              <div className="university-content">
                <span className="university-country">
                  {
                    university.countryFlag
                  }{" "}
                  {
                    university.country
                  }
                </span>

                <h3>
                  {
                    university.name
                  }
                </h3>

                <p className="university-rank">
                  {
                    university.rank
                  }
                </p>

                <p className="university-description">
                  {
                    university.description
                  }
                </p>

                <div className="university-tags">
                  {university.tags?.map(
                    (tag) => (
                      <span
                        key={tag}
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>

                <Link
                  to={`/university/${university.name
                    .toLowerCase()
                    .replace(
                      /\s+/g,
                      "-"
                    )}`}
                  className="primary-button"
                >
                  Explore
                </Link>
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
}

export default Wishlist;