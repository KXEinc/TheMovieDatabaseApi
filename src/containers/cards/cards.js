import React, { useEffect } from "react";
import Card from "../../components/card/card";
import { connect } from "react-redux";
import { posterURL } from "../../API/API";
import { showFooter } from "../../redux/actions/actions";

const Cards = ({ movies, displayLoader, ShowFooter }) => {
  useEffect(() => {
    ShowFooter();
    // eslint-disable-next-line
  }, []);

  return displayLoader ? null : (
    <div className={"cards cards_mlr"}>
      {movies.map(({ id, vote_average, title, poster_path }, i) => (
        <Card key={id} el={i}>
          <img
            className={"card__img"}
            src={posterURL.concat(poster_path)}
            alt="poster"
          />
          <h4 className={"card__rating card__rating_m1tb3lr"}>
            {vote_average}
          </h4>
          <h3 className={"card__title"}>{title}</h3>
        </Card>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    displayLoader: state.displayLoader,
    movies: state.movies,
  };
};

const mapReducerToState = (reducer) => {
  return {
    ShowFooter: () => reducer(showFooter()),
  };
};

export default connect(mapStateToProps, mapReducerToState)(Cards);
