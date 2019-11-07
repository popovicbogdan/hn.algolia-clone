import { GET_ARTICLES, SET_SEARCH_PARAMS, SET_SEARCH } from "./types";
import axios from "axios";

export const getArticles = (sort, tag) => dispatch => {
  const d = `http://hn.algolia.com/api/v1/${sort}?&query=&tags=${tag}&hitsPerPage=10`;
  console.log("GETITEM INVOKED with ", sort, " and ", tag);
  axios
    .get(d)
    .then(res =>
      dispatch({
        type: GET_ARTICLES,
        payload: res.data.hits
      })
    )
    .catch(err => console.log(err));
};

export const setSearchParams = (name, param) => {
  return { type: SET_SEARCH_PARAMS, name, payload: param };
};

export const setSearch = letter => {
  return {
    type: SET_SEARCH,
    payload: letter
  };
};
