import React from "react";

const Card = ({ movie, handleOnRemove, addMovieToList }) => {
  return (
    <div className="d-flex justify-content-center">
      <div>
        <div className="card " style={{ width: "18rem", marginTop: "1rem" }}>
          <img src={movie.Poster} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{movie.Title}</h5>
            <p className="card-text">
              <span>Rate : {movie.imdbRating}⭐️</span>
              <br />
              <span>Awards : {movie.Awards}</span>
              {movie.choice && (
                <span>
                  {" "}
                  Choosed : <strong>{movie.choice}</strong>
                </span>
              )}
            </p>
            {addMovieToList && (
              <div className="d-flex justify-content-between mb-2">
                <button
                  className="btn btn-success"
                  onClick={() => addMovieToList(movie, "awesome")}
                >
                  Awesome
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => addMovieToList(movie, "boring")}
                >
                  Boring
                </button>
              </div>
            )}
            <div className="d-grid">
              <button className="btn btn-danger" onClick={handleOnRemove}>
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
