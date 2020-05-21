import {
  ShowLoader,
  HideLoader,
  GetMoviesSuccess,
  SetNumOfPages,
  ShowFooter,
  HideFooter,
  ShowModal,
  CloseModal, SelectMovie,
} from '../actions/actionTypes'

const initState = {
  displayLoader: false,
  pages: 0,
  page: "",
  movies: [],
  numOfPages: [],
  showModal: false,
  showFooter: false,
  movie: null
};

export const rootReducer = (state = initState, { payload, type }) => {
  switch (type) {
    case ShowLoader:
      return { ...state, displayLoader: true };
    case HideLoader:
      return { ...state, displayLoader: false };
    case GetMoviesSuccess:
      return {
        ...state,
        page: payload.page,
        pages: payload.total_pages,
        movies: payload.results
      };
    case SetNumOfPages:
      return { ...state, numOfPages: payload.numOfPagesArr };
    case ShowFooter:
      return { ...state, showFooter: true };
    case HideFooter:
      return { ...state, showFooter: false };
    case ShowModal:
      return { ...state, showModal: true };
    case CloseModal:
      return { ...state, showModal: false };
    case SelectMovie:
      console.log("kek", payload.movie)
      return {...state, movie: payload.movie};
    default:
      return state;
  }
};
