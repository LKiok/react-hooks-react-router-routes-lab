import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      <ul>
        {actors.map((actor, index) => (
          <li key={index}>
            {/* Displaying actor's name */}
            {actor.name} -{" "}
            {/* Rendering each movie the actor acted in */}
            <ul>
              {actor.movies.map((movie, movieIndex) => (
                <li key={`${index}-${movieIndex}`}>{movie}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Actors;
