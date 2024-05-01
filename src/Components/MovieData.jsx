// import React from "react";

// function MovieData({ filteredMovies }) {
//   return (
//     <div className="MovieData card-wrapper correcter2">
//       {filteredMovies.map((movie) => (
//         <div key={movie.imdbmovieid} className="moviedata">
//           <img src={movie.moviemainphotos[0]} alt={movie.movietitle} />

//           <div>
//             <h2 className="moviename">{movie.movietitle}</h2>
//             <p className="fontsizer">
//               Languages: {movie.movielanguages.join(", ")}
//             </p>
//             <p className="fontsizer">
//               Countries: {movie.moviecountries.join(", ")}
//             </p>
//             <p className="fontsizer">Genres: {movie.moviegenres.join(", ")}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default MovieData;

import React from "react";

function MovieData({ filteredMovies }) {
  return (
    <div className="MovieData card-wrapper correcter2">
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => (
          <div key={movie.imdbmovieid} className="moviedata">
            <img src={movie.moviemainphotos[0]} alt={movie.movietitle} />
            <div>
              <h2 className="moviename">{movie.movietitle}</h2>
              <p className="fontsizer">
                Languages: {movie.movielanguages.join(", ")}
              </p>
              <p className="fontsizer">
                Countries: {movie.moviecountries.join(", ")}
              </p>
              <p className="fontsizer">
                Genres: {movie.moviegenres.join(", ")}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="no-results">No movies match the search criteria.</p>
      )}
    </div>
  );
}

export default MovieData;
