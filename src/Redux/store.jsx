import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizzaReducer } from "./reducers/reducers";
import { cartReducer } from "./reducers/CartReducer.jsx";
import { signInUserReducer } from "./reducers/UserReducer.jsx";
import { loginUserReducer } from "./reducers/UserReducer.jsx";
import { PlaceOrderReducer } from "./reducers/OrderReducer";

const rootReducer = combineReducers({
  getAllPizzaReducer: getAllPizzaReducer,
  cartReducer: cartReducer,
  signInUserReducer: signInUserReducer,
  loginUserReducer: loginUserReducer,
  PlaceOrderReducer: PlaceOrderReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;
const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
};
const middlewere = [thunk];

const store = legacy_createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewere))
);

export default store;
