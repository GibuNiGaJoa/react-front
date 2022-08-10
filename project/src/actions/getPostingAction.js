import { GET_POSTING_ALL_RANDOM } from "./types";
import { getPosting } from "../axios";

const URL = "/fundraisings/now"

//전체 게시글 랜덤 조회
export function getPostingAllRandom(dataToSubmit){
  const data = getPosting("GET", URL+"/sort1",dataToSubmit);
  return{
    type: GET_POSTING_ALL_RANDOM,
    payload: data,
  }
}