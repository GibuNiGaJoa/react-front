import {GET_POSTING_ALL_RANDOM } from "../actions/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {}, action) {
  switch (action.type) {
    case GET_POSTING_ALL_RANDOM:
      return { ...state, success: action.payload };
      
    default:
      return state;
  }
}

