import React, { useEffect } from "react";
import Card from "./Card";
import { useState } from "react";

const MovieList = ({ movieList, handleOnRemove }) => {
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    setDisplayList(movieList);
  }, [movieList]);

  const filterMovie = (filterBy) => {
    if (filterBy === "all") {
      setDisplayList(movieList);
    } else {
      const filteredArr = movieList.filter(
        (movie) => movie.choice === filterBy
      );
      setDisplayList(filteredArr);
    }
  };

  return (
    <div className="">
      <hr />
      <div
        className="btn-group d-flex gap-5"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => filterMovie("all")}
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => filterMovie("awesome")}
        >
          Awesome
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => filterMovie("boring")}
        >
          Boring
        </button>
      </div>
      <div className="d-flex justify-content-around flex-wrap ">
        {displayList.map((movie, i) => {
          return (
            <Card
              movie={movie}
              key={i}
              handleOnRemove={() => handleOnRemove(movie)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
