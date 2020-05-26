import React from "react";

import { connect } from "react-redux";
import FooterDrawer from "../../components/FooterDrawer/FooterDrawer";
import { getMovies } from "../../redux/actions/fetchActions";


//
const Footer = ({ pages, page, numOfPages, getMovies, showFooter }) => (
  showFooter && <FooterDrawer
    pages={pages}
    page={page}
    numOfPages={numOfPages}
    getMovies={getMovies}
    showFooter={{showFooter}}
  />
);

const mapStateToProps = (state) => {
  return {
    pages: state.display.pages,
    page: state.display.page,
    numOfPages: state.display.numOfPages,
    showFooter: state.ui.showFooter
  };
};

const mapDispatchToState = dispatch => {
  return {
    getMovies: (path, params) => dispatch(getMovies(path, params)),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(Footer);
