import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div className='card-list'>
      {movies
        .filter(movie => movie.poster_path)
        .map(movie => (
          <MovieCard key={movie.id} {...movie} />
        ))}
    </div>
  );
}

export default MovieList;
