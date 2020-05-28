import React from "react";
import Card from "../Card/Card";
import {useHistory} from "react-router-dom"

import Loader from "../Loader/Loader";

const Cards = ({ movies, displayLoader, showSelectedMovie }) => {
  const history = useHistory();

  const displaySelectedMovie = movie => {
    showSelectedMovie(movie);
    history.push(`/movie/${movie.id}`);
  }
  return displayLoader ? (
    <Loader />
  ) : (
    <div className={"cards cards_mlr"}>
      {movies.length > 0 ? (
        movies.map((el) => <Card key={el.id} movie={el} onclick={() => displaySelectedMovie(el)}/>)
      ) : (
        <h1>No Result</h1>
      )}
    </div>
  );
};

export default Cards;
