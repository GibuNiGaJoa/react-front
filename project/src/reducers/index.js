import { combineReducers } from "redux";
import user from "./userReducer";
import suggestReducer from "./suggestReducer";
import postingReducer from "./postingReducer";
import getPostingReducer from "./getPostingReducer";
import searchReducer from "./searchReducer";
import tagClickReducer from "./tagClickReducer";
import donationReducer from "./donationReducer";


const rootReducer = combineReducers({
  user,
  suggestReducer,
  postingReducer,
  getPostingReducer,
  searchReducer,
  tagClickReducer,
  donationReducer
});

export default rootReducer;