import {
  ShowLoader,
  HideLoader,
  GetMoviesSuccess,
  SetNumOfPages,
  ShowFooter,
  HideFooter,
  ShowModal,
  CloseModal,
  SelectMovie,
  InputValueChange,
  SearchSuccsess,
  AllowInput,
  ProhibitInput

} from "./actionTypes";

import axios from "axios";
import { APIkey, movieSearch, movieURL, topRate } from "../../API/API";

export function getMovies(pageNum) {
  return async (dispatch) => {
    dispatch(showLoader());
    try {
      const response = await axios.get(movieURL.concat(topRate), {
        params: {
          api_key: APIkey,
          page: pageNum,
        },
      });
      dispatch(getMoviesSuccess(response.data));
      dispatch(hideLoader());
    } catch (e) {
      console.log(e);
    }
  };
}

export function getMoviesSuccess({ page, total_pages, results }) {
  return {
    type: GetMoviesSuccess,
    payload: {
      page: page,
      numOfPages: total_pages,
      results,
    },
  };
}

export function showLoader() {
  return {
    type: ShowLoader,
  };
}

export function hideLoader() {
  return {
    type: HideLoader,
  };
}

export function setNumOfPages(numOfPages) {
  return {
    type: SetNumOfPages,
    payload: {
      pages: numOfPages
    },
  };
}

export function showFooter() {
  return {
    type: ShowFooter,
  };
}

export function hideFooter() {
  return {
    type: HideFooter,
  };
}

export function showModal() {
  return {
    type: ShowModal,
  };
}

export function closeModal() {
  return {
    type: CloseModal,
  };
}
function selectMovie(movie) {
  return {
    type: SelectMovie,
    payload: {
      movie,
    },
  };
}

export function clearSearch () {
  return dispatch => {
    dispatch(inputValueChange());
    dispatch(searchResultUpdate());
  }
}

export function showSelectedMovie(movie) {
  return dispatch => {
    dispatch(selectMovie(movie));
    dispatch(showModal());
  };
}

export function showFindedMovie(movie) {
  return dispatch => {
    dispatch(showSelectedMovie(movie));
    dispatch(clearSearch());
  }
}


function inputValueChange(value='') {
  return {
    type: InputValueChange,
    payload: {
      value,
    },
  };
}

export function searchResultUpdate(result = {}) {
  return {
    type: SearchSuccsess,
    payload: {
      result,
    },
  };
}

export function searchInputHandler(value) {
  return async (dispatch) => {
    dispatch(inputValueChange(value));
    if (value) {
      try {
        const searchResult = await axios.get(movieURL.concat(movieSearch), {
          params: {
            api_key: APIkey,
            query: value,
          },
        });
        dispatch(searchResultUpdate(searchResult.data));
      } catch (e) {
        console.log(e);
      }
    } else {
      dispatch(searchResultUpdate());
    }
  };
}

export function allowInput () {
  return {
    type: AllowInput
  }
}

export function prohibitInput () {
  return {
    type: ProhibitInput
  }
}

export function showFindedMovieOnPage(movies) {
  return (dispatch) => {
    dispatch(getMoviesSuccess(movies));
    dispatch(searchResultUpdate());
    dispatch(hideFooter());
  };
}


