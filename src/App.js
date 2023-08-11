import SearchForm from "./components/SearchForm";
import "./App.css";
import { useState } from "react";
import MovieList from "./components/MovieList";

function App() {
  const [movieList, setMovieList] = useState([]);

  const addMovieToList = (movie, choice) => {
    const newMovie = { ...movie, choice };
    setMovieList([...movieList, newMovie]);
  };
  const removeMovieFromList = (movie) => {
    const newArr = movieList.filter((m) => m.imdbID !== movie.imdbID);
    setMovieList(newArr);
  };

  return (
    <div className="wrapper bg-dark text-info">
      <div className="container">
        <div className="row">
          <div className="col text-center mt-5">
            <h1>🎥 My Movie Lists 🍿</h1>
            <hr />
          </div>
        </div>
        <SearchForm
          addMovieToList={addMovieToList}
          removeMovieFromList={removeMovieFromList}
        />
        <MovieList movieList={movieList} handleOnRemove={removeMovieFromList} />
      </div>
    </div>
  );
}

export default App;
