import React, { useEffect } from "react";
import { connect } from "react-redux";

import AboutMovieDrawer from "../../components/AboutMovieDrawer/AboutMovieDrawer";
import Loader from "../../components/Loader/Loader";
import Similar from "../similar/Similar";
import Recommendations from "../recommenadations/Recommendations";
import { getSimilarAndRecommendations } from "../../redux/actions/fetchActions";
import { hideFooter } from "../../redux/actions/uiActions";
import { inputValueChange } from "../../redux/actions/displayActions";

const AboutMovie = ({
  movie,
  genreList,
  getSimilarAndRecommendations,
  hideFooter,
  inputValueChange,
}) => {
  useEffect(() => {
      inputValueChange();
    if (movie) {
      hideFooter();
      getSimilarAndRecommendations(movie.id);
    }
  }, []);

  if (Object.keys(movie).length > 0) {
    return (
      <>
        <AboutMovieDrawer movie={movie} genreList={genreList} />
        <Similar />
        <Recommendations />
      </>
    );
  } else {
    return <Loader />;
  }
};

const mapStateToProps = (state) => {
  return {
    movie: state.display.movie,
    genreList: state.display.genreList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSimilarAndRecommendations: (id) =>
      dispatch(getSimilarAndRecommendations(id)),
    hideFooter: () => dispatch(hideFooter()),
    inputValueChange: () => dispatch(inputValueChange()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutMovie);
