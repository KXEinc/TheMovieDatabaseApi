import axios from "axios";
import {
  APIkey,
  genre,
  justMovie,
  movieURL,
  recommendations,
  similar,
} from "../../API/API";
import {
  ClearInput,
  GetMovie,
  GetSimilarAndRecommendations,
  StartFetchMovies,
  StartFetchSearch,
} from '../actions/actionTypes'
// noinspection NpmUsedModulesInstalled
import { put, call, takeEvery, select, all } from '@redux-saga/core/effects'
import {
  errorHandler,
  hideLoader,
  showFooter,
  showLoader,
} from "../actions/uiActions";
import {
  getGenreSuccsess,
  getMoviesSuccess, getSimilarAndRecommendationsSuccsess,
  inputValueChange,
  searchResultUpdate,
  setNumOfPages,
  showSelectedMovie,
} from '../actions/displayActions'


export default function* rootSaga() {
  yield takeEvery(StartFetchMovies, fetchTopMovies);
  yield takeEvery(StartFetchSearch, fetchSearch);
  yield takeEvery(ClearInput, clearInput);
  yield takeEvery(GetMovie, getMovie);
  yield takeEvery(GetSimilarAndRecommendations, getSimilarAndRecommendations);
}

async function getData({ path, params = {}, movie = "" }) {
  return await axios.get(movieURL + path + movie, {
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
    const state = yield select();
    if (
      state.display.numOfPages !== payload.data.total_pages ||
      state.display.pages.length === 0
    ) {
      yield put(setNumOfPages(payload.data.total_pages));
    }
    if (state.display.genreList.length === 0) {
      const request = {
        path: genre,
      };
      const payload = yield call(getData, request);
      yield put(getGenreSuccsess(payload.data.genres));
    }
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

function* getMovie({ payload }) {
  yield call(console.log, payload);
  try {
    const query = {
      path: justMovie,
      movie: payload,
    };
    const response = yield call(getData, query);
    const id = response.data;

    yield call(console.log, response);
    yield call(console.log, id);
    yield put(showSelectedMovie(id));
    yield put(searchResultUpdate());
  } catch (e) {
    yield console.log(e);
  }
}

function* clearInput() {
  yield put(inputValueChange());
  yield put(searchResultUpdate());
}


function* getSimilarAndRecommendations(movieId) {
  try {
    const queryR = {
      path: `${justMovie}${movieId.payload}${recommendations}`,
    };
    const queryS = {
      path: `${justMovie}${movieId.payload}${similar}`,
    };
    const similarResult = yield call(getData, queryS);
    yield call(console.log, similarResult)
    const recommendationsResult = yield call(getData, queryR);
    const payload ={
      similarResult: similarResult.data.results, recommendationsResult: recommendationsResult.data.results
    }
    yield call(console.log, payload)
    yield put(getSimilarAndRecommendationsSuccsess(payload));
  } catch (e) {
    yield call(console.log, e);
  }
}

