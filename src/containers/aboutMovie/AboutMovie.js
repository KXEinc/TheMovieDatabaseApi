import React from "react";
import { connect } from "react-redux";

import AboutMovieDrawer from "../../components/AboutMovieDrawer/AboutMovieDrawer";

const AboutMovie = ({ movie, genreList }) =>  {
  return <AboutMovieDrawer movie={movie} genreList={genreList}/>};

const mapStateToProps = (state) => {
  return {
    movie: state.display.movie,
    genreList: state.display.genreList
  };
};


export default connect(mapStateToProps)(AboutMovie);
