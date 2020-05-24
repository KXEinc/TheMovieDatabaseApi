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
  SearchSuccsess, AllowInput, ProhibitInput,
} from '../actions/actionTypes'

const initState = {
  displayLoader: false,
  pages: [],
  page: "",
  movies: [],
  numOfPages: 0,
  showModal: false,
  showFooter: false,
  movie: null,
  searchInputValue: "",
  searchResult: [],
  allowInput: true
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
        numOfPages: payload.numOfPages,
        movies: payload.results,
      };
    case SetNumOfPages:
      return { ...state, pages: payload.pages };
    case ShowFooter:
      return { ...state, showFooter: true };
    case HideFooter:
      return { ...state, showFooter: false };
    case ShowModal:
      return { ...state, showModal: true };
    case CloseModal:
      return { ...state, showModal: false };
    case SelectMovie:
      return { ...state, movie: payload.movie };
    case InputValueChange:
      return { ...state, searchInputValue: payload.value };
    case SearchSuccsess:
      return { ...state, searchResult: payload.result };
    case AllowInput:
      return {...state, allowInput: true};
      case ProhibitInput:
      return {...state, allowInput: false};
    default:
      return state;
  }
};
