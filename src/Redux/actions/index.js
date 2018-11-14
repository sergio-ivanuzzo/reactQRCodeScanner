import {DO_LOGIN, SCAN_QR_CODE, PARSE_QR_CODE} from '../constants/action-types';

export const doLogin = (token) => ({
    type: DO_LOGIN,
    payload: token
});

export const scanQRCode = () => ({
    type: SCAN_QR_CODE,
    payload: null
});

export const parseQRCode = (result) => ({
    type: PARSE_QR_CODE,
    payload: result
});