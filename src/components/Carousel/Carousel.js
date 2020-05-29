import React from "react";
import { posterURL } from "../../API/API";
import { useHistory } from "react-router-dom";

const Carousel = ({ results, title, onclick, update }) => {
  const history = useHistory();

  const items = results.map((el, i) => (
    <img
      key={i}
      src={posterURL + el.poster_path}
      className={"carousel__item carousel__item_mlr5"}
      alt={"poster"}
      onClick={() => displaySelectedMovie(el)}
    />
  ));

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
    <>
      <h2 className={"carousel__tittle carousel__title_center"}>{title}</h2>
      <div className="carousel" aria-label="Gallery">
        <div className={"carousel__btn carousel__btn-left"} onClick={slideLeft}>
          left
        </div>
        <div className={"carousel__container"}>{items}</div>
        <div
          className={"carousel__btn carousel__btn-right"}
          onClick={slideRight}
        >
          right
        </div>
      </div>
    </>
  );
};

export default Carousel;
