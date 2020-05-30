import React, { useEffect } from "react";
import { connect } from "react-redux";
import Cards from "../../components/Cards/Cards";
import { showSelectedMovie } from "../../redux/actions/displayActions";
import { hideFooter } from "../../redux/actions/uiActions";

const FindedCards = ({
  movies,
  displayLoader,
  showSelectedMovie,
  hideFooter,
  showFooter,
}) => {
  useEffect(() => {
    if (showFooter) {
      hideFooter();
    }
  }, [showFooter, hideFooter]);
  return (
    <Cards
      displayLoader={displayLoader}
      movies={movies}
      showSelectedMovie={showSelectedMovie}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    displayLoader: state.ui.displayLoader,
    movies: state.display.findedMovies,
    showFooter: state.ui.showFooter,
  };
};

const mapDispatchToState = (dispatch) => {
  // noinspection JSUnusedGlobalSymbols
  return {
    showSelectedMovie: (movie) => dispatch(showSelectedMovie(movie)),
    hideFooter: () => dispatch(hideFooter()),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(FindedCards);
