import {
  AllowInput,
  ErrorHappaned,
  HideNavElements,
  HideLoader, ProhibitInput,
  ShowNavElements,
  ShowLoader,
} from './actionTypes'

export function showLoader() {
  return {
    type: ShowLoader,
  };
}

export function hideLoader() {
  return {
    type: HideLoader,
  };
}

export function errorHandler(err) {
  return {
    type: ErrorHappaned,
    payload: err,
  };
}

export function showNavElements() {
  return {
    type: ShowNavElements,
  };
}

export function hideNavElements() {
  return {
    type: HideNavElements,
  };
}



export function allowInput() {
  return {
    type: AllowInput,
  };
}

export function prohibitInput() {
  return {
    type: ProhibitInput,
  };
}