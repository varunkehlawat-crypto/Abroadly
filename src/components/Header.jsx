import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";

function Header({ darkMode, setDarkMode }) {
  const { wishlist } = useWishlist();
  return (
    <header className="premium-home-header">
      <div className="shell premium-home-nav">
        {/* LEFT */}

        <Link to="/" className="brand-logo">
          <div className="brand-icon">
            <span className="material-symbols-outlined">flight_takeoff</span>
          </div>

          <span>Abroadly</span>
        </Link>

        {/* CENTER */}

        <nav className="premium-nav-links">
          <Link
            to="/"
            onClick={() => {
              setTimeout(() => {
                const section = document.getElementById("countries");

                section?.scrollIntoView({
                  behavior: "smooth",
                });
              }, 100);
            }}
          >
            Countries
          </Link>

          <Link
            to="/universities"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Universities
          </Link>

          <a href="#scholarships">Scholarships</a>

          <a href="#contact">Contact</a>
        </nav>

        {/* RIGHT */}

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            <span className="material-symbols-outlined">
              {darkMode ? "light_mode" : "dark_mode"}
            </span>
          </button>

          <Link to="/wishlist" className="wishlist-nav">
            <span className="material-symbols-outlined">favorite</span>

            {wishlist.length > 0 && (
              <span className="wishlist-count">{wishlist.length}</span>
            )}
          </Link>

          <button className="journey-button">Start Journey</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
