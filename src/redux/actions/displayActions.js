import {
  ClearInput,
  ClearSearchList,
  GetGenreSuccsess,
  GetMoviesSuccess,
  GetSimilarAndRecommendationsSuccsess,
  InputValueChange,
  SearchSuccsess,
  SetNumOfPages,
  ShowSelectedMovie, UpdateRecommendation, UpdateSimilar,
} from './actionTypes'

export function getMoviesSuccess({ page, total_pages, results, genre_ids }) {
  return {
    type: GetMoviesSuccess,
    payload: {
      page,
      numOfPages: total_pages,
      results,
      path: page,
      genreList: genre_ids,
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
  const pageNumArr = Array(numOfPages)
    .fill("")
    .map((el, i) => (el = i + 1));
  return {
    type: SetNumOfPages,
    payload: {
      pages: pageNumArr,
    },
  };
}

export function showSelectedMovie(movie) {
  return {
    type: ShowSelectedMovie,
    payload: movie,
  };
}

export function clearInput() {
  return {
    type: ClearInput,
  };
}

export function clearSearchList(result = [], path) {
  return {
    type: ClearSearchList,
    payload: {
      result,
      path,
    },
  };
}

export function getSimilarAndRecommendationsSuccsess(payload) {
  return {
    type: GetSimilarAndRecommendationsSuccsess,
    payload,
  };
}

export function getGenreSuccsess(genres) {
  return {
    type: GetGenreSuccsess,
    payload: genres,
  };
}

export function updateSimilar(newArr) {
  return {
    type: UpdateSimilar,
    payload: newArr
  }
}

export function updateRecommendationRe(newArr) {
  return {
    type: UpdateRecommendation,
    payload: newArr
  }
}