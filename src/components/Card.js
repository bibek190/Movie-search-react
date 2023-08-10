import React from "react";

const Card = ({ movie, handleOnRemove }) => {
  return (
    <div>
      <div>
        <div className="card " style={{ width: "18rem", marginTop: "1rem" }}>
          <img src={movie.Poster} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{movie.Title}</h5>
            <p className="card-text">
              <span>Rate : {movie.imdbRating}</span>
              <br />
              <span>Awards : {movie.Awards}</span>
            </p>
            <div className="d-flex justify-content-between mb-2">
              <button className="btn btn-success">Awesome</button>
              <button className="btn btn-warning">Boring</button>
            </div>
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
