import {
  ClearInput, ClearSearchList,
  GetMoviesSuccess,
  InputValueChange,
  SearchSuccsess, SelectMovie,
  SetNumOfPages, ShowSelectedMovie,
} from './actionTypes'

export function getMoviesSuccess({ page, total_pages, results }) {
  return {
    type: GetMoviesSuccess,
    payload: {
      page,
      numOfPages: total_pages,
      results,
      path: page
    },
  };
}
export function inputValueChange(value = "") {
  return {
    type: InputValueChange,
    payload: {
      value,
    },
  };
}


export function searchResultUpdate(result = []) {
  return {
    type: SearchSuccsess,
    payload: {
      result,
    },
  };
}

export function setNumOfPages(numOfPages) {
  const pageNumArr = Array(numOfPages).fill('').map((el, i) => el = i + 1);
  return {
    type: SetNumOfPages,
    payload: {
      pages: pageNumArr,
    },
  };
}

export function showSelectedMovie(movie){
  return {
    type: ShowSelectedMovie,
    payload: movie
  }
}


export function selectMovie(movie) {
  return {
    type: SelectMovie,
    payload: {
      movie,
    },
  };
}


export function clearInput() {
  return {
    type: ClearInput
  }
}

export function clearSearchList (result =[]) {
  return {
    type: ClearSearchList,
    payload: result
  }
}