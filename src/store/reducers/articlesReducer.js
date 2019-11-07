import { GET_ARTICLES } from "../actions/types";

// const initState = {
//   articles: []
// };

export default function articlesReducer(state = [], action) {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        articles: action.payload
      };
    default:
      return state;
  }
}
