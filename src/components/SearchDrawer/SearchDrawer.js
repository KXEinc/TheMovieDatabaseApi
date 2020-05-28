import React from "react";
import Input from "../Input/Input";
import { useHistory } from "react-router-dom";
import { movieSearch } from "../../API/API";

const Search = ({
  inputHandler,
  inputValue,
  searchResults,
  clearSearchList,
  allowInput,
  getMovie,
}) => {
  const history = useHistory();
  const searchResultRender = ({ key }) => {
    if (key === "Enter" && inputValue.length > 0) {
      clearSearchList(searchResults, `${inputValue}`);
      history.push(`/search/${inputValue}`);
    }
  };

  const selectMovieHandler = (id) => {
    getMovie(id);
    history.push(`/movie/${id}`);
  };

  const onFocusHandler = (value) => {
    if (value.length > 0) {
      inputHandler(value, movieSearch);
    }
  };

  return (
    <div className={"search__container"}>
      <ul className={"search__input search__list_ml5"}>
        <li>
          <Input
            tabndex={"0"}
            onchange={(e) => {
              inputHandler(e.target.value, movieSearch);
            }}
            onkeydown={(e) => {
              searchResultRender(e);
            }}
            onfocus={(e) => {
              onFocusHandler(e.target.value);
            }}
            value={inputValue}
            className={"search__input"}
            type={"search"}
            placeholder={"Enter the movie's name"}
            readonly={!allowInput}
          />
        </li>
        <li>
          <ul className={"search__list search__list_overflow"}>
            {searchResults &&
              searchResults.map((el) => {
                return (
                  <li
                    key={el.id}
                    className={"search__item_pt5 search__item_plr5"}
                    onClick={() => {
                      selectMovieHandler(el.id);
                    }}
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

export default Search;
