import axios from "axios";
import { APIkey, movieURL } from "../../API/API";
import {
  ClearInput,
  ShowSelectedMovie,
  StartFetchMovies,
  StartFetchSearch,
} from "../actions/actionTypes";
import { put, call, takeEvery } from "@redux-saga/core/effects";
import {
  errorHandler,
  hideLoader,
  showFooter,
  showLoader, showModal,
} from '../actions/uiActions'
import {
  getMoviesSuccess,
  inputValueChange,
  searchResultUpdate, selectMovie,
  setNumOfPages,
} from '../actions/displayActions'

export default function* rootSaga() {
  yield takeEvery(StartFetchMovies, fetchTopMovies);
  yield takeEvery(StartFetchSearch, fetchSearch);
  yield takeEvery(ClearInput, clearInput);
  yield takeEvery(ShowSelectedMovie, showMovie);
}

async function getData({ path, params }) {
  await setTimeout(() => {}, 1000);
  return await axios.get(movieURL.concat(path), {
    params: {
      api_key: APIkey,
      ...params,
    },
  });
}

function* fetchTopMovies(action) {
  yield put(showLoader());
  try {
    const payload = yield call(getData, action.payload);
    yield put(getMoviesSuccess(payload.data));
    yield put(setNumOfPages(payload.data.total_pages));
    yield put(hideLoader());
    yield put(showFooter());
  } catch (e) {
    yield put(errorHandler(e));
  }
}

function* fetchSearch(action) {
  yield put(inputValueChange(action.payload.value));
  try {
    const query = {
      path: action.payload.path,
      params: { query: action.payload.value },
    };
    let response = {};
    if (action.payload.value.length > 0) {
      response = yield call(getData, query);
    } else {
      response.data = "";
    }
    yield put(searchResultUpdate(response.data));
  } catch (e) {
    yield put(errorHandler(e));
  }
}

function* clearInput() {
  yield put(inputValueChange());
  yield put(searchResultUpdate());
}

function* showMovie(movie) {
  yield put(selectMovie(movie.payload));
  yield put(showModal());

}
