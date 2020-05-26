import {
  AllowInput,
  CloseModal, ErrorHappaned,
  HideFooter,
  HideLoader,
  ProhibitInput,
  ShowFooter,
  ShowLoader,
  ShowModal,
} from '../actions/actionTypes'

const initialState = {
  displayLoader: false,
  showModal: false,
  showFooter: false,
  allowInput: true,
  error: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ShowLoader:
      return { ...state, displayLoader: true };
    case HideLoader:
      return { ...state, displayLoader: false };
    case ShowFooter:
      return { ...state, showFooter: true };
    case HideFooter:
      return { ...state, showFooter: false };
    case ShowModal:
      return { ...state, showModal: true };
    case CloseModal:
      return { ...state, showModal: false };
    case AllowInput:
      return { ...state, allowInput: true };
    case ProhibitInput:
      return { ...state, allowInput: false };
    case ErrorHappaned:
      return {...state, error: payload.error}
    default:
      return state;
  }
};
