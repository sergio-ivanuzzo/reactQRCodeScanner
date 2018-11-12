import {DO_LOGIN, SCAN_QR_CODE, PARSE_QR_CODE} from "../constants/action-types";

export const doLogin = token => ({
    type: DO_LOGIN,
    payload: token
})