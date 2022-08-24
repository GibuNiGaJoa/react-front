import { PRESS_LIKE } from "./types";
import { likeAdd } from "../axios";


//댓글 좋아요 액션
const COMMENT_URL = "http://valuetogether.tk/fundraisings/"

export function pressLike(postId,dataToSubmit) {
  const data = likeAdd("GET", COMMENT_URL+postId+'/addlike', dataToSubmit);
  return {
    type: PRESS_LIKE,
    payload: data,
  };
}



