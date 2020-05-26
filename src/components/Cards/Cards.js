import React from "react";
import Card from "../Card/Card";

import Loader from "../Loader/Loader";

const Cards = ({ movies, displayLoader, showSelectedMovie }) => {
  return displayLoader ? (
    <Loader />
  ) : (
    <div className={"cards cards_mlr"}>
      {movies.length > 0 ? (
        movies.map((el) => <Card key={el.id} movie={el} onclick={() => showSelectedMovie(el)}/>)
      ) : (
        <h1>No Result</h1>
      )}
    </div>
  );
};

export default Cards;
