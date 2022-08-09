import {GET_SUGGEST_TOKEN, IMAGE_HANDLER, SUGGEST_POST } from "../actions/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {}, action) {
  switch (action.type) {
    case IMAGE_HANDLER:
      return { ...state, success: action.payload };

    case SUGGEST_POST:
      return {...state, success:action.payload };
      
      case GET_SUGGEST_TOKEN:
      return {...state, success:action.payload };

      
    default:
      return state;
  }
}

