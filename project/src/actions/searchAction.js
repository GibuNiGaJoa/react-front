import {  GET_RANDOM_SEARCH, GET_SEARCH_KEYWORD } from "./types";
import { getSearch  } from "../axios";


//검색 액션

const SEARCH_URL = "http://valuetogether.tk/search";

// 검색 첫 화면 랜덤 태그 받기
export function getSearchRandomTag(dataToSubmit) {
  const data = getSearch("GET", SEARCH_URL, dataToSubmit);
  return {
    type: GET_RANDOM_SEARCH,
    payload: data,
  };
}

export function getSearchKeyword(qs,dataToSubmit) {
  
  console.log(qs);
  const data = getSearch("GET", SEARCH_URL+qs, dataToSubmit);
  return {
    type: GET_SEARCH_KEYWORD,
    payload: data,
  };
}
