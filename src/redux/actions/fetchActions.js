import {
  GetMovie,
  GetSimilarAndRecommendations,
  StartFetchMovies,
  StartFetchSearch,
} from "./actionTypes";

export function getMovies(path, params) {
  return {
    type: StartFetchMovies,
    payload: { path, params },
  };
}

export function fetchSearch(value, path) {
  return {
    type: StartFetchSearch,
    payload: { value, path },
  };
}

export function getMovie(id) {
  return {
    type: GetMovie,
    payload: id,
  };
}

export function getSimilarAndRecommendations(id) {
  return {
    type: GetSimilarAndRecommendations,
    payload: id,
  };
}
