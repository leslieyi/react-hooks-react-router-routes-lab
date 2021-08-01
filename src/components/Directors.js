import React from "react";


function Directors({directors}) {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => 
        <div>{director.name}
        {director.movies.map(movie =>
        <li>{movie}</li>)}
 
        </div>
        )}

    </div>

  )
}

export default Directors;
