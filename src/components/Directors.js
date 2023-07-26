import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      <ul>
        {directors.map((director, index) => (
          <li key={index}>
            {/* Displaying director's name */}
            {director.name} -{" "}
            {/* Rendering each movie the director directed */}
            <ul>
              {director.movies.map((movie, movieIndex) => (
                <li key={`${index}-${movieIndex}`}>{movie}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Directors;
