import { LOGIN_USER } from "./types";
import { request } from "../axios";

const USER_URL = "/login";

//로그인액션
export function loginUser(dataToSubmit) {
  const data = request("post", USER_URL, dataToSubmit);
  return {
    type: LOGIN_USER,
    payload: data,
  };
}