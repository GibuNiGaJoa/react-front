import {POST_DONATION, GET_DONATION_MEMBER, GET_MY_MEMBER } from "./types";
import { request } from "../axios";


//기부하기 액션, 마이페이지 액션

const FUND_URL = "http://valuetogether.tk/";

export function donatePost(dataToSubmit) {
  const data = request("POST", FUND_URL+"donate", dataToSubmit);
  return {
    type: POST_DONATION,
    payload: data,
  };
}

export function getDonationMember(dataToSubmit){
  const data = request("GET", FUND_URL+"my/donations", dataToSubmit);
  return {
    type: GET_DONATION_MEMBER,
    payload: data,
  };
}

export function getMyMember(dataToSubmit){
  const data = request("GET", FUND_URL+"my", dataToSubmit);
  return {
    type: GET_MY_MEMBER,
    payload: data,
  };
}

