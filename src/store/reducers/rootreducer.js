import { combineReducers } from "redux";
import articlesReducer from "./articlesReducer";
import searchReducer from "./searchReducer";
import searchByWordReducer from "./searchByWordReducer";

const rootReducer = combineReducers({
  articles: articlesReducer,
  search: searchReducer,
  searchByWord: searchByWordReducer
});

export default rootReducer;
