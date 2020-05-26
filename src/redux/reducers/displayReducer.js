import {
  ClearSearchList,
  GetMoviesSuccess,
  InputValueChange, SearchSuccsess,
  SelectMovie,
  SetNumOfPages, ShowFindedMovie
} from '../actions/actionTypes'

const initialState = {
  page: null,
  numOfPages: 0,
  pages: [],
  searchInputValue: "",
  movie: null,
  movies: [],
  findedMovies: [],
  results: [],
  path: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SetNumOfPages:
      return { ...state, pages: payload.pages };
    case SelectMovie:
      return { ...state, movie: payload.movie };
    case InputValueChange:
      return { ...state, searchInputValue: payload.value };
    case GetMoviesSuccess:
      return {...state, path: payload.path, page: payload.page, numOfPages: payload.numOfPages, movies: payload.results }
    case SearchSuccsess:
      return { ...state, results: payload.result.results };
    case ShowFindedMovie: {
        return {...state, movies: payload.movies, results: [], path: `search`} //q=${payload.path}
      }
    case ClearSearchList: {
      return {...state, findedMovies: payload, results: []}
    }
    default:
      return state;
  }
};
