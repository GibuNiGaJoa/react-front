import { GET_POSTING_INFO,  POSTING_COMMENT } from "./types";
import { postingReq, request } from "../axios";


//제안하기 액션

const FUND_URL = "http://valuetogether.tk/fundraisings/";

export function getPostingInfo(id) {
  const data = postingReq("GET", FUND_URL+id);
  return {
    type: GET_POSTING_INFO,
    payload: data,
  };
}

export function commentPost(postId,dataToSubmit) {
  console.log(postId);
  const data = postingReq("POST", FUND_URL+postId+'/comment', dataToSubmit);
  return {
    type: POSTING_COMMENT,
    payload: data,
  };
}

