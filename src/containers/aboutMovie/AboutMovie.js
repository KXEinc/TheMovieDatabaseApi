import React from "react";
import { connect } from "react-redux";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import { closeModal } from "../../redux/actions/uiActions";
import {
  clearInput,
  clearSearchList,
} from '../../redux/actions/displayActions'
import AboutMovieDrawer from "../../components/AboutMovieDrawer/AboutMovieDrawer";

const AboutMovie = ({ showModal, closeModal, movie, clearInput, clearSearchList }) =>
  showModal && (
    <ModalWindow closeModal={closeModal}>
      <AboutMovieDrawer movie={movie} clearSearchList={clearSearchList}  clearInput={clearInput}/>
    </ModalWindow>
  );

const mapStateToProps = (state) => {
  return {
    showModal: state.ui.showModal,
    movie: state.display.movie,
    inputValue: state.display.searchInputValue,
    results: state.display.results
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    clearSearchList: () => dispatch(clearSearchList()),
    clearInput: () => dispatch(clearInput()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutMovie);
