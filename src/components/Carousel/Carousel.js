import React, { useEffect, useState } from "react";
import { posterURL } from "../../API/API";
import { useHistory } from "react-router-dom";

const Carousel = ({ results, title, onclick }) => {
  const history = useHistory();

  useEffect(() => {
    console.log("results", results);
    console.log("state", state);
    forceUpdate();
  });

  const useForceUpdate = () => {
    const [, setState] = useState()
    return setState
  }
 const forceUpdate = useForceUpdate()

  const items = results.map((el, i) => (
    <img
      key={i}
      src={posterURL + el.poster_path}
      className={"carousel__item carousel__item_mlr5"}
      alt={"poster"}
      onClick={() => displaySelectedMovie(el)}
    />
  ));

  const [state, setState] = useState({ items });

  const displaySelectedMovie = (movie) => {
    onclick(movie);
    history.push(`/movie/${movie.id}`);
  };

  const slideLeft = () => {
    setState((state) => {
      const arrOfItems = [...state.items];
      const temp = arrOfItems.shift();
      arrOfItems.push(temp);
      return {
        items: arrOfItems,
      };
    });
  };

  const slideRight = () => {
    setState((state) => {
      const arrOfItems = [...state.items];
      const temp = arrOfItems.pop();
      arrOfItems.unshift(temp);
      return {
        items: arrOfItems,
      };
    });
  };

  return (
    <>
      <h2 className={"carousel__tittle carousel__title_center"}>{title}</h2>
      <div className="carousel" aria-label="Gallery">
        <div className={"carousel__btn carousel__btn-left"} onClick={slideLeft}>
          left
        </div>
        <div className={"carousel__container"}>{state.items}</div>
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
