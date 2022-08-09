import { GET_SUGGEST_TOKEN, IMAGE_HANDLER, SUGGEST_POST } from "./types";
import { request, suggestCheckReq } from "../axios";


//제안하기 액션
// const USER_URL = "http://valuetogether.tk";
// const USER_URL = "http://43.200.162.222"

export function imageConverter(dataToSubmit) {
  const data = request("POST", "/upload", dataToSubmit);
  return {
    type: IMAGE_HANDLER,
    payload: data,
  };
}

export function suggestTokenCheck(dataToSubmit){
  const data = suggestCheckReq("GET", "/fundraisings/propose",dataToSubmit);
  return{
    type: GET_SUGGEST_TOKEN,
    payload: data,
  }
}

export function suggestPost(dataToSubmit){
  const data = request("POST", "/fundraisings/propose/project",dataToSubmit);
  return{
    type: SUGGEST_POST,
    payload: data,
  }
}

