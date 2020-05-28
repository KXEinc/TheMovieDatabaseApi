import {
  ClearSearchList, GetGenreSuccsess,
  GetMoviesSuccess, GetRecommendationsSuccsess, GetSimilarSuccsess,
  InputValueChange,
  SearchSuccsess,
  SetNumOfPages,
  ShowFindedMovie,
  ShowSelectedMovie,
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
  path: "",
  id: null,
  genreList: [],
  similar: [],
  recommendations: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SetNumOfPages:
      return { ...state, pages: payload.pages };
    case ShowSelectedMovie:
      console.log(payload);
      return { ...state, movie: payload, id: payload.id };
    case InputValueChange:
      return { ...state, searchInputValue: payload.value };
    case GetMoviesSuccess:
      return {
        ...state,
        path: payload.path,
        page: payload.page,
        numOfPages: payload.numOfPages,
        movies: payload.results
      };
    case SearchSuccsess:
      return { ...state, results: payload.result.results };
    case ShowFindedMovie: {
      return { ...state, movies: payload.movies, results: [], path: `search` };
    }
    case ClearSearchList: {
      return { ...state, findedMovies: payload.result, results: [], path: payload.path };
    }
    case GetRecommendationsSuccsess: {
      return {...state, recommendations: payload}
    }
    case GetSimilarSuccsess: {
      return {...state, similar: payload}
    }
    case GetGenreSuccsess: {
      return {...state, genreList: payload}
    }
    default:
      return state;
  }
};
