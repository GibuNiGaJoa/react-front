import { LOGOUT_USER, LOGIN_USER, REGISTER_USER, CHECK_TOKEN, FIND_PASSWORD,FIND_ACCOUNT_FIRST,FIND_ACCOUNT_SECOND, CHANGE_PASSWORD } from "../actions/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, success : action.payload };

    case REGISTER_USER:
      return { ...state, success: action.payload };

    case LOGOUT_USER:
      return { ...state, success: action.payload };

    case CHECK_TOKEN:
      return {...state, success : action.payload};

    case FIND_PASSWORD:
      return {...state, success : action.payload};

    case FIND_ACCOUNT_FIRST:
      return {...state, success : action.payload};

    case FIND_ACCOUNT_SECOND:
      return {...state, success : action.payload};

    case CHANGE_PASSWORD:
      return {...state, success : action.payload};
        

    default:
      return state;
  }
}

