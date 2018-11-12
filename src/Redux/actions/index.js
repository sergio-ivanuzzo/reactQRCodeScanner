import {ADD_ARTICLE, DO_LOGIN, SCAN_QR_CODE, PARSE_QR_CODE} from "../constants/action-types";

export const addArticle = article => ({
    type: ADD_ARTICLE,
    payload: article
});