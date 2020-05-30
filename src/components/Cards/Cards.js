import React from "react";
import Card from "../Card/Card";
import { useHistory } from "react-router-dom";

import Loader from "../Loader/Loader";

const Cards = ({ movies, displayLoader, showSelectedMovie }) => {
  const history = useHistory();
  const displaySelectedMovie = (movie) => {
    showSelectedMovie(movie);
    history.push(`/movie/${movie.id}`);
  };
  return displayLoader ? (
    <Loader />
  ) : (
    <div className={"cards cards_mlr"}>
      {movies.length > 0 ? (
        movies.map((el) => (
          <Card
            key={el.id}
            movie={el}
            onclick={() => displaySelectedMovie(el)}
          />
        ))
      ) : (
        <div className={"no-result-container"}>
          <div className={"no-result no-result_size no-result_bg-color"}>
            <p className={"no-result__text"}>No Result</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
