import {
    GET_POSTING_ALL_RANDOM, GET_POSTING_ALL_ENDDATE, GET_POSTING_ALL_UPDATE,
    GET_POSTING_ANIMAL, GET_POSTING_DISABLED, GET_POSTING_EARTH, GET_POSTING_ENVIRONMENT, GET_POSTING_KIDS, GET_POSTING_NEIGHBORHOOD,
    GET_POSTING_OLDS, GET_POSTING_SOCIAL, GET_POSTING_WOMAN, GET_POSTING_YOUNG
} from "../actions/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {}, action) {
    switch (action.type) {
        case GET_POSTING_ALL_RANDOM, GET_POSTING_ALL_ENDDATE, GET_POSTING_ALL_UPDATE:
            return { ...state, success: action.payload };

        case GET_POSTING_ANIMAL, GET_POSTING_DISABLED, GET_POSTING_EARTH, GET_POSTING_ENVIRONMENT, GET_POSTING_KIDS,
            GET_POSTING_NEIGHBORHOOD, GET_POSTING_OLDS, GET_POSTING_SOCIAL, GET_POSTING_WOMAN, GET_POSTING_YOUNG:
            return { ...state, success: action.payload };

        default:
            return state;
    }
}

