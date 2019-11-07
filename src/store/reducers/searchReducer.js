// import { SET_SEARCH_PARAMS } from "../actions/actions";

export default function searchReducer(state = {}, action) {
  switch (action.name) {
    case "sort":
      return {
        ...state,
        sort: action.payload
      };
    case "type":
      return {
        ...state,
        type: action.payload
      };
    case "dateRange":
      return {
        ...state,
        dateRange: action.payload
      };
    default:
      return state;
  }
}
