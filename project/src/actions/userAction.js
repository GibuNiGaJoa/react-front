import { LOGIN_USER, REGISTER_USER, FIND_ACCOUNT_FIRST,FIND_ACCOUNT_SECOND,FIND_PASSWORD, CHANGE_PASSWORD } from "./types";
import { request } from "../axios";


const USER_URL = "/login";

// 로그인
export function loginUser(dataToSubmit) {
  const data = request("POST", USER_URL, dataToSubmit);
  
  return {
    type: LOGIN_USER,
    payload: data,
  };
}
// 회원가입
export function registerUser(dataToSubmit) {
  const data = request("POST",  USER_URL + "/create_account", dataToSubmit);
  
  return {
    type: REGISTER_USER,
    payload: data,
  };
}
// 아이디찾기 -1
export function findAccountFirst(dataToSubmit) {
  const data = request("POST", USER_URL + '/find_account_guide/first', dataToSubmit);
  
  return {
    type: FIND_ACCOUNT_FIRST,
    payload: data,
  };
}
// 아이디 찾기 -2
export function findAccountSecond(dataToSubmit) {
  const data = request("POST", USER_URL + '/find_account_guide/second', dataToSubmit);
  
  return {
    type: FIND_ACCOUNT_SECOND,
    payload: data,
  };
}
// 비밀번호 찾기(회원검증)
export function findPassword(dataToSubmit) {
  const data = request("POST", USER_URL + '/find_password', dataToSubmit);

  return {
    type: FIND_PASSWORD,
    payload: data,
  };
}
export function changePassword(dataToSubmit) {
  const data = request("PUT", USER_URL+'/find_password/change_password', dataToSubmit);
  
  return {
    type: CHANGE_PASSWORD,
    payload: data,
  };
}