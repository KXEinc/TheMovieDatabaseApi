import React, { useEffect } from "react";
import { connect } from "react-redux";
import Cards from "../../components/Cards/Cards";
import { showSelectedMovie } from "../../redux/actions/displayActions";
import { hideNavElements } from "../../redux/actions/uiActions";

const FindedCards = ({
  movies,
  displayLoader,
  showSelectedMovie,
  hideNavElements,
  showNavElements,
}) => {
  useEffect(() => {
    if (showNavElements) {
      hideNavElements();
    }
  }, [showNavElements, hideNavElements]);
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
    showNavElements: state.ui.showNavElements,
  };
};

const mapDispatchToState = (dispatch) => {
  // noinspection JSUnusedGlobalSymbols
  return {
    showSelectedMovie: (movie) => dispatch(showSelectedMovie(movie)),
    hideNavElements: () => dispatch(hideNavElements()),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(FindedCards);
