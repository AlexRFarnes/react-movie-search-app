import React from "react";

function MovieCard({
  id,
  title,
  poster_path,
  release_date,
  vote_average,
  overview,
}) {
  return (
    <div className='card' key={id}>
      <img
        className='card__image'
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`}
        alt={title + " poster"}
      />
      <div className='card__content'>
        <h3 className='card__title'>{title}</h3>
        <p>
          <small>RELEASE DATE: {release_date}</small>
        </p>
        <p>
          <small>RATING: {vote_average}</small>
        </p>
        <p className='card__desc'>{overview}</p>
      </div>
    </div>
  );
}

export default MovieCard;
