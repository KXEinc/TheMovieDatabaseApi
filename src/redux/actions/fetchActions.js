import {
  GetMovie,
  GetRecommendations,
  GetSimilar,
  StartFetchMovies,
  StartFetchSearch
} from './actionTypes'

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


export function getMovie (id) {
  return {
    type: GetMovie,
    payload: id
  }
}

export function getSimilar (id) {
  return {
    type: GetSimilar,
    payload: id
  }
}


export function getRecommendations (id) {
  return {
    type: GetRecommendations,
    payload: id
  }
}
