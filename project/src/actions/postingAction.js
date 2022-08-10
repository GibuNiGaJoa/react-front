import { GET_POSTING_INFO, IMAGE_HANDLER, SUGGEST_POST } from "./types";
import { postingReq, request } from "../axios";


//제안하기 액션

const FUND_URL = "/fundraisings";

export function getPostingInfo(dataToSubmit) {
  const data = postingReq("GET", FUND_URL+"/15", dataToSubmit);
  return {
    type: GET_POSTING_INFO,
    payload: data,
  };
}

