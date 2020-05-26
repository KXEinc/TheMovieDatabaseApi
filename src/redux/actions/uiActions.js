import {
  AllowInput,
  CloseModal,
  ErrorHappaned,
  HideFooter,
  HideLoader, ProhibitInput,
  ShowFooter,
  ShowLoader,
  ShowModal
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

export function showFooter() {
  return {
    type: ShowFooter,
  };
}

export function hideFooter() {
  return {
    type: HideFooter,
  };
}

export function showModal() {
  return {
    type: ShowModal,
  };
}

export function closeModal() {
  return {
    type: CloseModal,
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