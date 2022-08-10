import { combineReducers } from "redux";
import user from "./userReducer";
import suggestReducer from "./suggestReducer";
import postingReducer from "./postingReducer";
import getPostingReducer from "./getPostingReducer";

const rootReducer = combineReducers({
  user,
  suggestReducer,
  postingReducer,
  getPostingReducer
});

export default rootReducer;