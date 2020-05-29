import React, { useEffect } from "react";
import { posterURL } from "../../API/API";
import { useHistory } from "react-router-dom";

const Carousel = ({ results, title, onclick}) => {
  const history = useHistory();

  const displaySelectedMovie = (movie) => {
    onclick(movie);
    history.push(`/movie/${movie.id}`);
  }

  return (
    <>
      <h2 className={"carousel__tittle carousel__title_center"}>{title}</h2>
      <div className="carousel" aria-label="Gallery">
        <div className={"carousel__btn carousel__btn-left"}>left</div>
        <div className={"carousel__container"}>
          {results.map((el, i) => (
            <img
              key={i}
              src={posterURL + el.poster_path}
              className={"carousel__item carousel__item_mlr5"}
              alt={"poster"}
              onClick={() => displaySelectedMovie(el)}
            />
          ))}
        </div>
        <div className={"carousel__btn carousel__btn-right"}>right</div>
      </div>
    </>
  );
};

export default Carousel;
