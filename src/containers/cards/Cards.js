import React, { useEffect } from "react";
import Card from "../../components/card/Card";
import { connect } from "react-redux";
import { clearSearch, getMovies, searchResultUpdate, showFooter } from '../../redux/actions/actions'
import { withRouter } from "react-router-dom";

const Cards = ({
  movies,
  displayLoader,
  showFooter,
  inputValue,
  clearSearch,
  page,
  getMovies,
  searchResult
}) => {
  useEffect(() => {
    inputValue !== "" && clearSearch();
    //showFooter();
    getMovies(page)
    //history.push(`/${page}`);
    // eslint-disable-next-line
  }, []);

  //useEffect(() => {clearSearch()}, [movies])

  return displayLoader ? null : (
    <div className={"cards cards_mlr"}>
      {movies.length > 0 ? (
        movies.map((el) => <Card key={el.id} movie={el} />)
      ) : (
        <h1>No Result</h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    displayLoader: state.displayLoader,
    movies: state.movies,
    inputValue: state.searchInputValue,
    page: state.page,
    searchResult: state.searchResult
  };
};

const mapReducerToState = (reducer) => {
  // noinspection JSUnusedGlobalSymbols
  return {
    showFooter: () => reducer(showFooter()),
    clearSearch: () => reducer(clearSearch()),
    getMovies: (pageNum) => reducer(getMovies(pageNum))
  };
};

export default connect(mapStateToProps, mapReducerToState)(withRouter(Cards));
