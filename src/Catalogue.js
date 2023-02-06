import { useEffect, useState } from "react";
import axios from "axios";
// import the Link component to allow us to build out new Links
import { Link } from "react-router-dom";

const Catalogue = () => {
  // set up movie state
  // putting it into empty array because we're going to map through it
  const [movies, setMovies] = useState([]);

  // On component mount(useEffect)...
  useEffect(() => {
    // Fetch list of popular movies for a specific year from TMDB API with Axios
    axios({
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "9f84cc9067b16f5e2a52e8450e15b67f",
        language: "en-US",
        sort_by: "popularity.desc",
        include_adult: "false",
        include_video: "false",
        page: 1,
        primary_release_year: 1988,
      },
    }).then((res) => {
      console.log(res.data.results);
      // Store those movies in state
      setMovies(res.data.results);
    });
  }, []);

  return (
    <ul className="catalogue">
      {movies.map((movie) => (
        // Map through the movies state to render JSX with the movie posters(movie component?)
        // We are using the ES6 functions implicit return here instead of the function block {} - implicit return, only returning one thing can do this. Don't need to write {} return
        // movie is variable word to describe it
        <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
            <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={`Poster for ${movie.original_title}`}
                />
            </Link>
        </li>
      ))}
    </ul>
  );
}

export default Catalogue;