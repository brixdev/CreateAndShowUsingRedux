import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddlware from "redux-thunk";

import pet from "../module/TodoPet/store/reducer";

const initialState = {
  pet: {},
};

const store = createStore(
  combineReducers({ pet }),
  initialState,
  composeWithDevTools(applyMiddleware(thunkMiddlware))
);

export default store;
