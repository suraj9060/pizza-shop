import {legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizzaReducer } from "./reducers/reducers";


const rootReducer = combineReducers({
  getAllPizzaReducer: getAllPizzaReducer,
});


const initialState = {}
const middlewere = [thunk]

const store = legacy_createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewere)))

export default store;

