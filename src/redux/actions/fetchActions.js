import { StartFetchMovies, StartFetchSearch } from './actionTypes'

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
