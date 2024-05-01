import React, { useState } from "react";

function Filter({
  allLanguages,
  allCountries,
  allGenres,
  filters,
  onFilterChange,
}) {
  const [activeTab, setActiveTab] = useState("languages");

  const handleFilterChange = (type, value) => {
    onFilterChange(type, value);
  };

  const handleNameClick = (type, value) => {
    onFilterChange(type, value);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "languages":
        return (
          <div className="scroll">
            {allLanguages.map((language, index) => (
              <div key={index} className="filter-item">
                <input
                  type="checkbox"
                  checked={filters.language.includes(language)}
                  onChange={() => handleFilterChange("language", language)}
                />
                <label onClick={() => handleNameClick("language", language)}>
                  {language}
                </label>
              </div>
            ))}
          </div>
        );
      case "countries":
        return (
          <div className="scroll">
            {allCountries.map((country, index) => (
              <div key={index} className="filter-item">
                <input
                  type="checkbox"
                  checked={filters.country.includes(country)}
                  onChange={() => handleFilterChange("country", country)}
                />
                <label onClick={() => handleNameClick("country", country)}>
                  {country}
                </label>
              </div>
            ))}
          </div>
        );
      case "genres":
        return (
          <div className="scroll">
            {allGenres.map((genre, index) => (
              <div key={index} className="filter-item">
                <input
                  type="checkbox"
                  checked={filters.genre.includes(genre)}
                  onChange={() => handleFilterChange("genre", genre)}
                />
                <label onClick={() => handleNameClick("genre", genre)}>
                  {genre}
                </label>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="Filter">
      <div className="filter-buttons">
        <button
          className={`button1 ${
            activeTab === "languages" ? "colourchanger" : ""
          }`}
          onClick={() => handleTabClick("languages")}
        >
          Languages
        </button>
        <button
          className={`button2 ${
            activeTab === "countries" ? "colourchanger" : ""
          }`}
          onClick={() => handleTabClick("countries")}
        >
          Countries
        </button>
        <button
          className={`button3 ${activeTab === "genres" ? "colourchanger" : ""}`}
          onClick={() => handleTabClick("genres")}
        >
          Genres
        </button>
      </div>
      <div className="filter-container">
        <h3>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h3>
        {renderContent()}
      </div>
    </div>
  );
}

export default Filter;
