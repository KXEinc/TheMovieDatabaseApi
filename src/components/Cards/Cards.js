import React from "react";
import Card from "../Card/Card";
import {useHistory} from "react-router-dom"

import Loader from "../Loader/Loader";
import { GetSimilarAndRecommendations } from '../../redux/actions/actionTypes'
import { getSimilarAndRecommendations } from '../../redux/actions/fetchActions'

const Cards = ({ movies, displayLoader, showSelectedMovie }) => {
  const history = useHistory();

const displaySelectedMovie = movie => {
    getSimilarAndRecommendations(movie.id)
    showSelectedMovie(movie); //TODO move it inside getSimilarAndRecommendations
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
