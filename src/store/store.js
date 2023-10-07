import { combineReducers, createStore } from "redux";
import postReducer from "./reducers/postReducer";

export const rootReducer = combineReducers({
  postReducer,
});

export const store = createStore(rootReducer);
