import { IMAGE_HANDLER } from "./types";
import { request } from "../axios";


//제안하기 액션
const USER_URL = "http://valuetogether.tk/upload";

export function imageConverter(dataToSubmit) {
  const data = request("POST", USER_URL, dataToSubmit);
  return {
    type: IMAGE_HANDLER,
    payload: data,
  };
}
