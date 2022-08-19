import { GET_KEYWORD_CLICK } from "./types";
import { getSearch } from "../axios";


//제안하기 액션
const DOMAIN_URL = "http://valuetogether.tk/tags/";


export function tagSearch(keyword) {
  const data = getSearch("GET", DOMAIN_URL +keyword);
  return {
    type: GET_KEYWORD_CLICK,
    payload: data,
  };
}

