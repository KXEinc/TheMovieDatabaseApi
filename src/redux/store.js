import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import reduxThunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/sagas";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
// noinspection JSCheckFunctionSignatures
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
