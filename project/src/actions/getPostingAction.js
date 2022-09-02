import {
    GET_POSTING_ALL_RANDOM, GET_POSTING_ALL_UPDATE, GET_POSTING_ALL_ENDDATE, GET_POSTING_KIDS, GET_POSTING_YOUNG, GET_POSTING_WOMAN,
    GET_POSTING_OLDS, GET_POSTING_DISABLED, GET_POSTING_SOCIAL, GET_POSTING_EARTH, GET_POSTING_NEIGHBORHOOD, GET_POSTING_ANIMAL, GET_POSTING_ENVIRONMENT, GET_EPILOGUE
} from "./types";
import { getPosting } from "../axios";


const URL = "http://valuetogether.tk/fundraisings/now"

//전체 게시글 랜덤 조회
export function getPostingAllRandom(dataToSubmit) {
    const data = getPosting("GET", URL + "/sort1", dataToSubmit);
    return {
        type: GET_POSTING_ALL_RANDOM,
        payload: data,
    }
}

//전체 게시글 최신순 조회
export function getPostingAllUpdate(dataToSubmit) {
    const data = getPosting("GET", URL + "/sort2", dataToSubmit);
    return {
        type: GET_POSTING_ALL_UPDATE,
        payload: data,
    }
}

//전체 게시글 종료임박순 조회
export function getPostingAllEnddate(dataToSubmit) {
    const data = getPosting("GET", URL + "/sort3", dataToSubmit);
    return {
        type: GET_POSTING_ALL_ENDDATE,
        payload: data,
    }
}

//카테고리별 게시글 조회
export function getPostingKids(dataToSubmit) {
    const data = getPosting("GET", URL + "/sort1/10", dataToSubmit);
    return {
        type: GET_POSTING_KIDS,
        payload: data,
    }
}

export function getPostingYoung(dataToSubmit) {
    const data = getPosting("GET", URL + "/sort1/11", dataToSubmit);
    return {
        type: GET_POSTING_YOUNG,
        payload: data,
    }
}

export function getPostingWoman(dataToSubmit) {
    const data = getPosting("GET", URL + "/sort1/12", dataToSubmit);
    return {
        type: GET_POSTING_WOMAN,
        payload: data,
    }
}

export function getPostingOlds(dataToSubmit) {
    const data = getPosting("GET", URL + "/sort1/13", dataToSubmit);
    return {
        type: GET_POSTING_OLDS,
        payload: data,
    }
}

export function getPostingDisabled(dataToSubmit) {
    const data = getPosting("GET", URL + "/sort1/14", dataToSubmit);
    return {
        type: GET_POSTING_DISABLED,
        payload: data,
    }
}

export function getPostingSocial(dataToSubmit) {
    const data = getPosting("GET", URL + "/sort1/18", dataToSubmit);
    return {
        type: GET_POSTING_SOCIAL,
        payload: data,
    }
}

export function getPostingEarth(dataToSubmit) {
    const data = getPosting("GET", URL + "/sort1/16", dataToSubmit);
    return {
        type: GET_POSTING_EARTH,
        payload: data,
    }
}
export function getPostingNeighborhood(dataToSubmit) {
    const data = getPosting("GET", URL + "/sort1/17", dataToSubmit);
    return {
        type: GET_POSTING_NEIGHBORHOOD,
        payload: data,
    }
}
export function getPostingAnimal(dataToSubmit) {
    const data = getPosting("GET", URL + "/sort1/6", dataToSubmit);
    return {
        type: GET_POSTING_ANIMAL,
        payload: data,
    }
}
export function getPostingEnvironment(dataToSubmit) {
    const data = getPosting("GET", URL + "/sort1/9", dataToSubmit);
    return {
        type: GET_POSTING_ENVIRONMENT,
        payload: data,
    }
}

export function getEpilogue() {
    const data = getPosting("GET", "http://valuetogether.tk/fundraisings/epilogue");
    return {
        type: GET_EPILOGUE,
        payload: data,
    }
}