import {GET_KEYWORD_CLICK,  } from "../actions/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {}, action) {
  switch (action.type) {
    case GET_KEYWORD_CLICK:
      return { ...state, success: action.payload };

    
    default:
      return state;
  }
}

