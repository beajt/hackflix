import { useEffect, useState } from "react";
import axios from "axios";

// allow the component to access the param it was passed
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// store the param in a variable

const MovieDetails = () => {
    // put the movieID on the page

    const {movieID} = useParams();
    // create state to store our movie details
    const [movie, setMovie] = useState({});
    // on component mount...
    useEffect( () => {
        // make an axios call to get movie details using the movieID param
        axios ({
            url:`https://api.themoviedb.org/3/movie/${movieID}`,
            params: {
                api_key: "9f84cc9067b16f5e2a52e8450e15b67f"
            }
        }).then ( (res) => {
            setMovie(res.data);
            // set details to state
        })
    }, []);

    const {original_title, tagline, overview, poster_path} = movie;
    // create new variables for movie.original_title, movie.tagline, movie.overview, etc. makes it shorter. destructuring

    return (
      <>
        <div className="poster">
          <div className="description">
            <h2>{original_title}</h2>
            <h2>{tagline}</h2>
            <p>{overview}</p>
          </div>
          <div className="poster-image">
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={`Poster for ${original_title}`}
            />
          </div>
        </div>
        <Link to={'/'}>
            <button>Back</button>
        </Link>
      </>
    );
}

export default MovieDetails;