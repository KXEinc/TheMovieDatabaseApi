import React from "react";
import { connect } from "react-redux";
import { showSelectedMovie } from "../../redux/actions/actions";
import { posterURL } from "../../API/API";

const Cart = ({ movie, showSelectedMovie }) => {
  const poster =
    movie.poster_path
      ? posterURL.concat(movie.poster_path)
      : "/assert/noimage/noimageavailable.gif";
  return (
    <div
      onClick={() => showSelectedMovie(movie)}
      className={"card__item card__item_m10"}
    >
      <img className={"card__img"} src={poster} alt="poster" />
      <h4 className={"card__rating card__rating_m1tb3lr"}>
        {movie.vote_average}
      </h4>
      <h3 className={"card__title"}>{movie.title}</h3>
    </div>
  );
};

const mapDispatchToProps = (reducer) => {
  return {
    showSelectedMovie: (el) => reducer(showSelectedMovie(el)),
  };
};

export default connect(null, mapDispatchToProps)(Cart);
