import React, { useEffect } from "react";
import { connect } from "react-redux";
import Cards from "../../components/Cards/Cards";

import {
  clearInput,
  showSelectedMovie,
} from "../../redux/actions/displayActions";
import { showFooter } from "../../redux/actions/uiActions";

const TopMovies = ({
  movies,
  displayLoader,
  clearInput,
  inputValue,
  showSelectedMovie,
  showFooter,
  displayFooter
}) => {
  useEffect(() => {
    if (inputValue.length > 0) {
      clearInput();
    }
    if (!showFooter) {
      displayFooter();
    }
    // noinspection JSCheckFunctionSignatures
  }, [ clearInput, showFooter, displayFooter]);

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
    showFooter: state.ui.showFooter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearInput: () => dispatch(clearInput()),
    showSelectedMovie: (movie) => dispatch(showSelectedMovie(movie)),
    displayFooter: () => dispatch(showFooter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopMovies);
