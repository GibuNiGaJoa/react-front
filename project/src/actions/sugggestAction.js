import { GET_SUGGEST_TOKEN, IMAGE_HANDLER, SUGGEST_POST } from "./types";
import { request, suggestCheckReq } from "../axios";


//제안하기 액션
const DOMAIN_URL = "http://valuetogether.tk";


export function imageConverter(dataToSubmit) {
  const data = request("POST", DOMAIN_URL + "/upload", dataToSubmit);
  return {
    type: IMAGE_HANDLER,
    payload: data,
  };
}

export function suggestTokenCheck(dataToSubmit){
  const data = suggestCheckReq("GET", DOMAIN_URL+"/fundraisings/propose",dataToSubmit);
  return{
    type: GET_SUGGEST_TOKEN,
    payload: data,
  }
}

export function suggestPost(dataToSubmit){
  const data = request("POST", DOMAIN_URL+ "/fundraisings/propose/project",dataToSubmit);
  return{
    type: SUGGEST_POST,
    payload: data,
  }
}

