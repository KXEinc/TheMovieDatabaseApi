import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import reduxThunk from "redux-thunk";

// noinspection JSCheckFunctionSignatures
const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;
