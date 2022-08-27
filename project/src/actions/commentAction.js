import { PRESS_LIKE, REMOVE_COMMENT, REMOVE_LIKE } from "./types";
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

export function removeLike(postId,dataToSubmit) {
  const data = likeAdd("GET", COMMENT_URL+postId+'/removelike', dataToSubmit);
  return {
    type: REMOVE_LIKE,
    payload: data,
  };
}
export function removeComment(postId,dataToSubmit) {
  const data = likeAdd("GET", COMMENT_URL+postId+'/delete', dataToSubmit);
  return {
    type: REMOVE_COMMENT,
    payload: data,
  };
}





