import React from "react";
import { posterURLw185 } from "../../API/API";
// noinspection ES6CheckImport
import { useHistory } from "react-router-dom";

const Carousel = ({ results, title, onclick, update }) => {
  const history = useHistory();

  const items = results.map((el, i) => {
    // noinspection JSUnresolvedVariable
    const poster_path = el.poster_path
      ? posterURLw185.concat(el.poster_path)
      : "/assert/noimage/noimageavailable.gif";
    return (
      <div className={'carousel__item__wraper carousel__item__wraper_mlr5'}>
        <img
          key={i}
          src={poster_path}
          className={"carousel__item"}
          alt={"poster"}
          onClick={() => displaySelectedMovie(el)}
        />
      </div>
    );
  });

  const displaySelectedMovie = (movie) => {
    onclick(movie);
    history.push(`/movie/${movie.id}`);
  };

  const slideLeft = () => {
    const arrOfItems = [...results];
    const temp = arrOfItems.shift();
    arrOfItems.push(temp);
    update(arrOfItems);
  };

  const slideRight = () => {
    const arrOfItems = [...results];
    const temp = arrOfItems.pop();
    arrOfItems.unshift(temp);
    update(arrOfItems);
  };

  return (
    <div className={"carousel"}>
      <h2 className={"carousel__tittle carousel__title_center"}>{title}</h2>
      <div className={"carousel__container"}>
        <div
          className={"carousel__btn carousel__btn_left"}
          onClick={slideLeft}
        />
        <div className={"carousel__container__content"}>{items}</div>
        <div
          className={"carousel__btn carousel__btn_right"}
          onClick={slideRight}
        />
      </div>
    </div>
  );
};

export default Carousel;
