import {PARSE_QR_CODE, SCAN_QR_CODE} from "../constants/action-types";

const initialState = {
    parsedQRCode: null
}

export const QRCodeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SCAN_QR_CODE:
            return {...state, parsedQRCode: null}
        case PARSE_QR_CODE:
            return {...state, parsedQRCode: action.payload}
        default:
            return state;
    }
}