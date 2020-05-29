import React from "react";
import { connect } from "react-redux";
import Carousel from "../../components/Carousel/Carousel";
import { showSelectedMovie } from '../../redux/actions/displayActions'

const Similar = ({ similar, showSelectedMovie }) => {
  return similar.length > 0 ? (
    <Carousel results={similar} onclick={showSelectedMovie} title={'Similar Movie:'}/>
  ) : (
    <h2>No similar</h2>
  );
};

const mapStateToProps = (state) => {
  return { similar: state.display.similar };
};

const mapDispatchToState = (dispatch) => {
  return {
    showSelectedMovie: (movie) => dispatch(showSelectedMovie(movie)),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(Similar);

