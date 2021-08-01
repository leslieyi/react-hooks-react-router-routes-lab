import React from "react";


function Actors({actors}) {
  return(
    <div>

      <h1>Actors Page</h1>
      {actors.map(actor =>
        <div>{actor.name}
        
        {actor.movies.map(movie => 
          <li>{movie}</li>)}
        </div>
          
          )}
  

    </div>

  )
}

export default Actors;
