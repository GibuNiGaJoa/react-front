import { combineReducers } from "redux";
import user from "./userReducer";
import suggestReducer from "./suggestReducer";

const rootReducer = combineReducers({
  user,
  suggestReducer
});

export default rootReducer;