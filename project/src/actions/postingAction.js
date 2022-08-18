import { GET_POSTING_INFO,  POSTING_COMMENT } from "./types";
import { postingReq, request } from "../axios";


//제안하기 액션

const FUND_URL = "http://valuetogether.tk/fundraisings/";

export function getPostingInfo(id) {
  console.log(id);
  const data = postingReq("GET", FUND_URL+id);
  return {
    type: GET_POSTING_INFO,
    payload: data,
  };
}

export function commnentPost(dataToSubmit) {
  const data = postingReq("POST", FUND_URL+"/25", dataToSubmit);
  return {
    type: POSTING_COMMENT,
    payload: data,
  };
}

