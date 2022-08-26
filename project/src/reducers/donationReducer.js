import { POST_DONATION, GET_DONATION_MEMBER, GET_MY_MEMBER } from "../actions/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {}, action) {
  switch (action.type) {
    case POST_DONATION:
      return { ...state, success: action.payload };

    case GET_DONATION_MEMBER:
      return { ...state, success: action.payload };

    case GET_MY_MEMBER:
      return { ...state, success: action.payload };


    default:
      return state;
  }
}
