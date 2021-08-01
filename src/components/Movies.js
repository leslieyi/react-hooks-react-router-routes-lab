import React from "react";
import { movies } from "../data";

function Movies({ movies }) {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => (
        <div>
          <span>Title: {movie.title}   </span>
          <br/>
          <span>Time: {movie.time}   </span>


          <ul>
            {movie.genres.map((genre) => (
              <li>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Movies;
