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
} from "./actionTypes";

import axios from "axios";
import { APIkey, movieURL, topRate } from "../../API/API";

export function getMovies(props, i) {
  return async (dispatch) => {
    dispatch(showLoader());
    try {
      const response = await axios.get(movieURL.concat(topRate), {
        params: {
          api_key: APIkey,
          page: i,
        },
      });
      dispatch(getMoviesSuccess(response.data));
      if (props.numOfPages.length === 0) {
        dispatch(setNumOfPages(response.data.total_pages));
        props.history.push(`/${response.data.page}`);
      }
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
      page,
      total_pages,
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
      numOfPagesArr: Array(numOfPages)
        .fill(null)
        .map((el, i) => i + 1),
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

export function showSelectedMovie(movie) {
  return (dispatch) => {
    dispatch(selectMovie(movie));
    dispatch(showModal());
  }
}
