import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";
import App from "../App";

const SearchForm = ({ addMovieToList }) => {
  const [form, setForm] = useState("");
  const [movie, setMovie] = useState({});
  const [isError, setError] = useState(false);

  // 1.Save the value of input field
  function handleChange(e) {
    setForm(e.target.value);
    setError(false);
  }
  //   2.get Api
  const omdbAPI = "https://www.omdbapi.com/?apikey=255d5728&t=";
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(omdbAPI + form);
      if (response.data.imdbID) {
        setMovie(response.data);
        console.log(response.data);
      } else {
        setError(true);
        setMovie({});
      }
    } catch (e) {
      setError(true);
      setMovie({});
    }
  };
  //   handle on delete
  const handleOnRemove = (e) => {
    e.preventDefault();
    setMovie({});
  };

  // handle add movie and clear
  const handleAddMovieAndClear = (movie, type) => {
    addMovieToList(movie, type);
    setForm("");
    setMovie({});
  };

  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              placeholder="Name a movie....."
              value={form}
              onChange={handleChange}
            />
          </div>
          <div className="col-3 d-grid">
            <button className="btn btn-primary"> Search</button>
          </div>
        </div>
      </form>
      {movie.imdbID && (
        <Card
          movie={movie}
          addMovieToList={handleAddMovieAndClear}
          handleOnRemove={handleOnRemove}
        />
      )}
      {isError && (
        <div class="alert alert-danger mt-4 text-center" role="alert">
          No Movie Found
        </div>
      )}
    </div>
  );
};

export default SearchForm;
