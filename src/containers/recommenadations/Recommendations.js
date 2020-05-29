import React from "react";
import { connect } from "react-redux";
import Carousel from "../../components/Carousel/Carousel";
import { showSelectedMovie } from '../../redux/actions/displayActions'

const Recommendations = ({ recommendations, showSelectedMovie }) => {
  return recommendations.length > 0 ? (
    <Carousel results={recommendations} onclick={showSelectedMovie} title={'Recommended Movies:'}/>
  ) : (
    <h2>No recommendations</h2>
  );
};

const mapStateToProps = (state) => {
  return { recommendations: state.display.recommendations };
};

const mapDispatchToState = (dispatch) => {
  return {
    showSelectedMovie: (movie) => dispatch(showSelectedMovie(movie)),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(Recommendations);
