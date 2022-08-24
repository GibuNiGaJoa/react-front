import {POST_DONATION } from "../actions/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {}, action) {
  switch (action.type) {
    case POST_DONATION:
      return { ...state, success: action.payload };
      
    default:
      return state;
  }
}
