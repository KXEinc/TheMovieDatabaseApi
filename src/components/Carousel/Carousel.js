import React, { useEffect } from "react";

const Carousel = (props) => {
  useEffect(() => {}, []);
  console.log("!!!!", props)
  return (
    <div className="carousel" aria-label="Gallery">
      <div className={"carousel__btn carousel__btn-left"} />
      <div className={"carousel__container"}>
        {/*{img_path.map((el) => ( <div>kek </div>))}*/}
            {/*<img src={el} className={"carousel_item"} /> </div>*/}

      </div>
      <div className={"carousel__btn carousel__btn-right"} />
    </div>
  );
};

export default Carousel;
