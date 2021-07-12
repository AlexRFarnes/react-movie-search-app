import React from "react";
const BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=fc8d6f07486c3d979e99a9da8bdb4a45&language=en-US&page=1&include_adult=false&query=`;

function SearchMovies({ setMovies }) {
  const [inputQuery, setInputQuery] = React.useState("");

  async function searchMovies(event) {
    event.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}${inputQuery}`);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <form className='form' onSubmit={searchMovies}>
        <label htmlFor='query' className='label'>
          Movie Name
        </label>
        <input
          className='input'
          id='query'
          type='text'
          name='query'
          placeholder="i.e. Howl's Moving Castle"
          value={inputQuery}
          onChange={e => setInputQuery(e.target.value)}
        />
        <button className='button' type='submit'>
          Search
        </button>
      </form>
    </>
  );
}

export default SearchMovies;
