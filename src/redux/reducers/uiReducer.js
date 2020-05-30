import {
  AllowInput,
  ErrorHappaned,
  HideNavElements,
  HideLoader,
  ProhibitInput,
  ShowNavElements,
  ShowLoader,
} from "../actions/actionTypes";

const initialState = {
  displayLoader: false,
  showNavElements: true,
  allowInput: true,
  error: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ShowLoader:
      return { ...state, displayLoader: true };
    case HideLoader:
      return { ...state, displayLoader: false };
    case ShowNavElements:
      return { ...state, showNavElements: true };
    case HideNavElements:
      return { ...state, showNavElements: false };
    case AllowInput:
      return { ...state, allowInput: true };
    case ProhibitInput:
      return { ...state, allowInput: false };
    case ErrorHappaned:
      return { ...state, error: payload.error };
    default:
      return state;
  }
};
