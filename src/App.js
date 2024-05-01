// import React, { Component } from "react";
// import moviesData from "./movies.json";
// import "./App.css";
// import Filter from "./Components/Filter";
// import Header from "./Components/Header";
// import MovieData from "./Components/MovieData";

// class App extends Component {
//   state = {
//     movies: moviesData,
//     filters: {
//       language: [],
//       country: [],
//       genre: [],
//     },
//     searchQuery: "",
//   };

//   handleFilterChange = (type, value) => {
//     const { filters } = this.state;
//     let updatedFilters = { ...filters };

//     if (updatedFilters[type].includes(value)) {
//       updatedFilters[type] = updatedFilters[type].filter(
//         (val) => val !== value
//       );
//     } else {
//       updatedFilters[type].push(value);
//     }

//     this.setState({ filters: updatedFilters });
//   };

//   handleSearchChange = (e) => {
//     this.setState({ searchQuery: e.target.value });
//   };

//   render() {
//     const { movies, filters, searchQuery } = this.state;
//     let filteredMovies = [...movies];

//     if (filters.language.length > 0) {
//       filteredMovies = filteredMovies.filter((movie) =>
//         filters.language.some((lang) => movie.movielanguages.includes(lang))
//       );
//     }

//     if (filters.country.length > 0) {
//       filteredMovies = filteredMovies.filter((movie) =>
//         filters.country.some((country) =>
//           movie.moviecountries.includes(country)
//         )
//       );
//     }

//     if (filters.genre.length > 0) {
//       filteredMovies = filteredMovies.filter((movie) =>
//         filters.genre.some((genre) => movie.moviegenres.includes(genre))
//       );
//     }

//     if (searchQuery) {
//       filteredMovies = filteredMovies.filter((movie) =>
//         movie.movietitle.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     let allLanguages = [
//       ...new Set(movies.flatMap((movie) => movie.movielanguages)),
//     ];
//     let allCountries = [
//       ...new Set(movies.flatMap((movie) => movie.moviecountries)),
//     ];
//     let allGenres = [...new Set(movies.flatMap((movie) => movie.moviegenres))];

//     return (
//       <div className="App">
//         <div class="circle1"></div>
//         <div class="circle2"></div>
//         <div className="separator">
//           <Header
//             searchQuery={searchQuery}
//             handleSearchChange={this.handleSearchChange}
//           />
//           <div className="Content">
//             <div className="width20">
//               <h2>Filters</h2>
//               <Filter
//                 allCountries={allCountries}
//                 allGenres={allGenres}
//                 allLanguages={allLanguages}
//                 filters={filters}
//                 onFilterChange={this.handleFilterChange}
//               />
//             </div>
//             <MovieData filteredMovies={filteredMovies} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import moviesData from "./movies.json";
import "./App.css";
import Filter from "./Components/Filter";
import Header from "./Components/Header";
import MovieData from "./Components/MovieData";

class App extends Component {
  state = {
    movies: moviesData,
    filters: {
      language: [],
      country: [],
      genre: [],
    },
    searchQuery: "",
  };

  handleFilterChange = (type, value) => {
    const { filters } = this.state;
    let updatedFilters = { ...filters };

    if (updatedFilters[type].includes(value)) {
      updatedFilters[type] = updatedFilters[type].filter(
        (val) => val !== value
      );
    } else {
      updatedFilters[type].push(value);
    }

    this.setState({ filters: updatedFilters });
  };

  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  handleSearch = () => {
    // Perform search logic here
    console.log("Performing search for: ", this.state.searchQuery);
    // You can update the state with the filtered movies here
  };

  render() {
    const { movies, filters, searchQuery } = this.state;
    let filteredMovies = [...movies];

    if (filters.language.length > 0) {
      filteredMovies = filteredMovies.filter((movie) =>
        filters.language.some((lang) => movie.movielanguages.includes(lang))
      );
    }

    if (filters.country.length > 0) {
      filteredMovies = filteredMovies.filter((movie) =>
        filters.country.some((country) =>
          movie.moviecountries.includes(country)
        )
      );
    }

    if (filters.genre.length > 0) {
      filteredMovies = filteredMovies.filter((movie) =>
        filters.genre.some((genre) => movie.moviegenres.includes(genre))
      );
    }

    if (searchQuery) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.movietitle.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    let allLanguages = [
      ...new Set(movies.flatMap((movie) => movie.movielanguages)),
    ];
    let allCountries = [
      ...new Set(movies.flatMap((movie) => movie.moviecountries)),
    ];
    let allGenres = [...new Set(movies.flatMap((movie) => movie.moviegenres))];

    return (
      <div className="App">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div className="separator">
          <Header
            searchQuery={searchQuery}
            handleSearchChange={this.handleSearchChange}
            handleSearch={this.handleSearch}
          />
          <div className="Content">
            <div className="width20">
              <h2>Filters</h2>
              <Filter
                allCountries={allCountries}
                allGenres={allGenres}
                allLanguages={allLanguages}
                filters={filters}
                onFilterChange={this.handleFilterChange}
              />
            </div>
            <MovieData filteredMovies={filteredMovies} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
