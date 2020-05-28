import React, { useEffect } from "react";
import { posterURL } from "../../API/API";

const Carousel = ({ results }) => {
  useEffect(() => {}, []);
  console.log("!!!!", results);
  return (
    <div className="carousel" aria-label="Gallery">
      <div className={"carousel__btn carousel__btn-left"} />
      <div className={"carousel__container"}>
        {results.map((el) => (
          <img src={posterURL + el.poster_path} className={"carousel_item"} alt={'poster'}/>
        ))}
      </div>
      <div className={"carousel__btn carousel__btn-right"} />
    </div>
  );
};

export default Carousel;
