import React, { useEffect } from "react";
import { connect } from "react-redux";
import Cards from "../../components/Cards/Cards";

import {
  clearInput,
  showSelectedMovie,
} from "../../redux/actions/displayActions";
import { showNavElements } from "../../redux/actions/uiActions";

const TopMovies = ({
  movies,
  displayLoader,
  clearInput,
  inputValue,
  showSelectedMovie,
  showNavElements,
  displayNavElements
}) => {
  useEffect(() => {
    if (inputValue.length > 0) {
      clearInput();
    }
    if (!showNavElements  && !displayLoader) {
     displayNavElements();
    }
    // noinspection JSCheckFunctionSignatures
  }, [ clearInput, showNavElements, displayNavElements, displayLoader]);

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
    movies: state.display.movies,
    inputValue: state.display.searchInputValue,
    showNavElements: state.ui.showNavElements,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearInput: () => dispatch(clearInput()),
    showSelectedMovie: (movie) => dispatch(showSelectedMovie(movie)),
    displayNavElements: () => dispatch(showNavElements()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopMovies);
