import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {/* Rendering movie titles and times */}
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            {movie.title} - {movie.time}
          </li>
        ))}
      </ul>
      {/* Rendering movie genres */}
      <ul>
        {movies.map((movie, index) =>
          movie.genres.map((genre, genreIndex) => (
            <li key={`${index}-${genreIndex}`}>{genre}</li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Movies;
