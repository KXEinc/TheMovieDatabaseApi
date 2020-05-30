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
  getMovie
}) => {
  const history = useHistory();
  const searchResultRender = ({ key }) => {
    if (key === "Enter" && inputValue.length > 0) {
      clearSearchList(searchResults, `${inputValue}`);
      history.push(`/search/${inputValue}`);
    }
  };

  const selectMovieHandler = el => {
    console.log(el)
    getMovie(el.id);
    history.push(`/movie/${el.id}`);
  };

  const onFocusHandler = (value) => {
    if (value.length > 0) {
      inputHandler(value, movieSearch);
    }
  };

  return (
    <div className={"search-container"}>
      <div className={"search-container__list-wrapper"}>
        <ul className={"search-container__list"}>
          <li className={"search-container__list__input-li"}>
            <Input
              tabndex={"0"}
              onchange={(e) => inputHandler(e.target.value, movieSearch)}
              onkeydown={(e) => searchResultRender(e)}
              onfocus={(e) => onFocusHandler(e.target.value)}
              onblur={() => setTimeout(() => clearSearchList(), 150)}
              value={inputValue}
              className={"input input_size"}
              type={"search"}
              placeholder={"Enter the movie's name"}
              readonly={!allowInput}
            />
          </li>
          {searchResults &&
            searchResults.map((el) => {
              return (
                <li
                  key={el.id}
                  className={"search-container__list__item"}
                  onClick={() => {
                    selectMovieHandler(el);
                  }}
                  tabIndex={"0"}
                >
                  {el.title}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Search;
