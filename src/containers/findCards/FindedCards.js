import React from "react";
import { connect } from "react-redux";
import Cards from "../../components/Cards/Cards";
import { showSelectedMovie } from '../../redux/actions/displayActions'

const FindedCards = ({ movies, displayLoader, showSelectedMovie }) => {
  return <Cards displayLoader={displayLoader} movies={movies} showSelectedMovie={showSelectedMovie} />;
};

const mapStateToProps = (state) => {
  return {
    displayLoader: state.ui.displayLoader,
    movies: state.display.findedMovies
  };
};

const mapDispatchToState = dispatch => {
  // noinspection JSUnusedGlobalSymbols
  return {
    showSelectedMovie: (movie) => dispatch(showSelectedMovie(movie))
  };
};

export default connect(mapStateToProps, mapDispatchToState)(FindedCards);
