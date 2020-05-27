import React from "react";
import { connect } from "react-redux";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import { closeModal } from "../../redux/actions/uiActions";
import AboutMovieDrawer from "../../components/AboutMovieDrawer/AboutMovieDrawer";

const AboutMovie = ({ showModal, closeModal, movie }) =>
  showModal && (
    <>
      <ModalWindow closeModal={closeModal} />
      <AboutMovieDrawer movie={movie} />
    </>
  );

const mapStateToProps = (state) => {
  return {
    showModal: state.ui.showModal,
    movie: state.display.movie,
    inputValue: state.display.searchInputValue,
    results: state.display.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutMovie);
