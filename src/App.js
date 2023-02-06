import './App.css';
import Catalogue from './Catalogue';
import MovieDetails from './MovieDetails';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './ErrorPage';

function App() {

  return (
    <div className="Wrapper">
      <header>
        <h1>Hackflix</h1>
      </header>
      {/* create paths allowing us to render different things depending on the URL */}
      <Routes>
        {/* Show catalogue on default path */}
        <Route path="/" element={ <Catalogue />} />
        {/* Show the MovieDetails component on /movie/:movieID , passing it the movie ID*/}
        <Route path="/movie/:movieID" element={ <MovieDetails /> }/>
        {/* whatever is after : is our custom parameter */}
        {/* Show the ErrorPage for routes that don't exist */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* Routes is container that holds all route */}
    </div>
  );
}

export default App;



// load/movies/movieID(Where movie ID is the movie's ID)
// load a component that calls our API with the movie's ID to get details about that movie
// Put those details on the page 


