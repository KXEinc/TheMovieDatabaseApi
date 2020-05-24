import React from "react";
import Input from "../../components/input/Input";
import { connect } from "react-redux";
import {
  searchInputHandler,
  showFindedMovie,
  showFindedMovieOnPage,
} from "../../redux/actions/actions";
import { withRouter } from "react-router-dom";

const Search = ({
  inputHandler,
  inputValue,
  searchResult,
  allowInput,
  showSearchResultsOnPage,
  showFindedMovie,
  history,
}) => {
  const searchResultRender = ({ key }) => {
    if (key === "Enter") {
        history.push(`/search/${inputValue}`);
        showSearchResultsOnPage(searchResult);
    }
  };
  return (
    <div className={"search__container"}>
      <ul className={"search__input search__list_ml5"}>
        <li>
          <Input
            tabndex={"0"}
            onchange={inputHandler}
            onkeydown={(e) => searchResultRender(e)}
            value={inputValue}
            className={"search__input"}
            type={"search"}
            placeholder={"Enter the movie's name"}
            readonly={allowInput}
          />
        </li>
        <li>
          <ul className={"search__list search__list_overflow"}>
            {searchResult.results &&
              searchResult.results.map((el) => {
                return (
                  <li
                    key={el.id}
                    className={"search__item_pt5 search__item_plr5"}
                    onClick={() => showFindedMovie(el)}
                    tabIndex={"0"}
                  >
                    {el.title}
                  </li>
                );
              })}
          </ul>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    inputValue: state.searchInputValue,
    allowInput: state.allowInput,
    searchResult: state.searchResult,
  };
};

const mapReducerToProps = (reducer) => {
  // noinspection JSUnusedGlobalSymbols
  return {
    inputHandler: (event) => reducer(searchInputHandler(event.target.value)),
    showFindedMovie: (el) => reducer(showFindedMovie(el)),
    showSearchResultsOnPage: (searchResult) =>
      reducer(showFindedMovieOnPage(searchResult)),
  };
};

export default connect(mapStateToProps, mapReducerToProps)(withRouter(Search));
