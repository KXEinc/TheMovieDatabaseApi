import React, { useEffect } from "react";
import { connect } from "react-redux";
import Cards from "../../components/Cards/Cards";

import { clearInput, showSelectedMovie } from '../../redux/actions/displayActions'


const TopMovies = ({ movies, displayLoader, clearInput, inputValue, showSelectedMovie }) => {
  useEffect(() => {
    if (inputValue.length > 0) {
      clearInput();
    }
    // noinspection JSCheckFunctionSignatures
  }, []);

  return <Cards displayLoader={displayLoader} movies={movies} showSelectedMovie={showSelectedMovie}/>;
};

const mapStateToProps = (state) => {
  return {
    displayLoader: state.ui.displayLoader,
    movies: state.display.movies,
    inputValue: state.display.searchInputValue,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearInput: () => dispatch(clearInput()),
    showSelectedMovie: movie => dispatch(showSelectedMovie(movie))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(TopMovies);
