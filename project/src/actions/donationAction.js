import {POST_DONATION } from "./types";
import { request } from "../axios";


//기부하기 액션

const FUND_URL = "http://valuetogether.tk/";

export function donatePost(dataToSubmit) {
  const data = request("POST", FUND_URL+"donate", dataToSubmit);
  return {
    type: POST_DONATION,
    payload: data,
  };
}