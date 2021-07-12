import React from "react";
import SearchMovies from "./components/SearchMovies";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = React.useState([]);

  return (
    <div className='container'>
      <h1 className='title'>React Movie Search</h1>
      <SearchMovies setMovies={setMovies} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
