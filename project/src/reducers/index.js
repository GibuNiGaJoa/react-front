import { combineReducers } from "redux";
import user from "./userReducer";
import suggestReducer from "./suggestReducer";
import postingReducer from "./postingReducer";
import getPostingReducer from "./getPostingReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  user,
  suggestReducer,
  postingReducer,
  getPostingReducer,
  searchReducer,
});

export default rootReducer;