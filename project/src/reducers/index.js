import { combineReducers } from "redux";
import user from "./userReducer";
import suggestReducer from "./suggestReducer";
import postingReducer from "./postingReducer";

const rootReducer = combineReducers({
  user,
  suggestReducer,
  postingReducer
});

export default rootReducer;