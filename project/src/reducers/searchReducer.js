import {GET_RANDOM_SEARCH, GET_SEARCH_KEYWORD } from "../actions/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {}, action) {
  switch (action.type) {
    case GET_RANDOM_SEARCH:
      return { ...state, success: action.payload };

    case GET_SEARCH_KEYWORD:
      return { ...state, success: action.payload };
      
    default:
      return state;
  }
}

