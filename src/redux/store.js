import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import reduxThunk from "redux-thunk";
import { logger } from 'redux-logger/src'

// noinspection JSCheckFunctionSignatures
const store = createStore(rootReducer, applyMiddleware(reduxThunk, logger));

export default store;
