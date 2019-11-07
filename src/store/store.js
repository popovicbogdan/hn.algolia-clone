import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootreducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initState = {
  articles: [],
  search: {}
};
const middleWare = [thunk];
const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
