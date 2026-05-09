import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import CompareCountries from "./components/CompareCountries";

import Header from "./components/Header";

import Hero from "./components/Hero";

import Universities from "./pages/Universities";

import Countries from "./components/Countries";

import CallToAction from "./components/CallToAction";

import Footer from "./components/Footer";

import Wishlist from "./pages/Wishlist";

import CountryDetails from "./pages/CountryDetails";

import UniversityDetails from "./pages/UniversityDetails";

import { useTheme } from "./context/ThemeContext";

/* HOME */

function Home({ search, setSearch }) {
  return (
    <>
      <Hero search={search} setSearch={setSearch} />

      <Countries search={search} />

      <CompareCountries />

      <CallToAction />
    </>
  );
}

/* APP */

function App() {
  const [search, setSearch] = useState("");

  const { darkMode, setDarkMode } = useTheme();

  const location = window.location.pathname;

  const isCountryPage = location.startsWith("/country/");

  return (
    <>
      {!isCountryPage && (
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      )}

      <main>
        <Routes>
          {/* HOME */}

          <Route
            path="/"
            element={<Home search={search} setSearch={setSearch} />}
          />

          {/* COUNTRY */}

          <Route
            path="/country/:slug"
            element={<CountryDetails darkMode={darkMode} />}
          />

          {/* UNIVERSITIES */}

          <Route path="/universities" element={<Universities />} />

          {/* UNIVERSITY DETAILS */}

          <Route path="/university/:name" element={<UniversityDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        
      </main>

      <Footer />
    </>
  );
}

export default App;
