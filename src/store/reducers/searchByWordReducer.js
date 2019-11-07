import { SET_SEARCH } from "../actions/types";

function searchByWordReducer(state = "", action) {
  switch (action.type) {
    case SET_SEARCH:
      return action.payload;
    default:
      return state;
  }
}
export default searchByWordReducer;
