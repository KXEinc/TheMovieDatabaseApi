import React from "react";
import { posterURLw185 } from "../../API/API";

const Cart = ({ movie, onclick }) => {
  // noinspection JSUnresolvedVariable
  const poster = movie.poster_path
    ? posterURLw185.concat(movie.poster_path)
    : "/assert/noimage/noimageavailable.gif";
  return (
    <div onClick={onclick} className={"card__item card__item_m10"}>
      <img className={"card__img"} src={poster} alt="poster" />
      <h4 className={"card__rating card__rating_m1tb3lr"}>
        {movie.vote_average}
      </h4>
      <h3 className={"card__title"}>{movie.title}</h3>
    </div>
  );
};

export default Cart;
