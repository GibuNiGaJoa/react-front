import { LOGIN_USER, REGISTER_USER, LOGOUT_USER } from "./types";
import { request } from "../axios";


//로그인액션
const USER_URL = "/login";

export function loginUser(dataToSubmit) {
  const data = request("POST", USER_URL, dataToSubmit);
  return {
    type: LOGIN_USER,
    payload: data,
  };
}


export function registerUser(dataToSubmit) {
  const data = request("POST",  USER_URL + "/create_account", dataToSubmit);

  return {
    type: REGISTER_USER,
    payload: data,
  };
}

export function logoutUser(dataToSubmit) {
  const data = request("post", USER_URL + "/logout" , dataToSubmit);
  return {
    type: LOGOUT_USER,
    payload: data,
  };
}