import React from 'react'

import { connect } from 'react-redux'
import NavElementsDrawer from '../../components/NavElementsDrawer/NavElementsDrawer'
import { getMovies } from '../../redux/actions/fetchActions'

const NavElements = ({ pages, page, numOfPages, getMovies, showNavElements }) => (
  showNavElements && <NavElementsDrawer
    pages={pages}
    page={page}
    numOfPages={numOfPages}
    getMovies={getMovies}
    showNavElements={{showNavElements}}
  />
);

const mapStateToProps = (state) => {
  return {
    pages: state.display.pages,
    page: state.display.page,
    numOfPages: state.display.numOfPages,
    showNavElements: state.ui.showNavElements
  };
};

const mapDispatchToState = dispatch => {
  return {
    getMovies: (path, params) => dispatch(getMovies(path, params)),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(NavElements);
