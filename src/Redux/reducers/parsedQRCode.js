const initialState = {
    parsedQRCode: null
}

const QRCodeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SCAN_QR_CODE:
            return {...state, parsedQRCode: null}
        case PARSE_QR_CODE:
            return {...state, parsedQRCode: action.payload}
        default:
            return state;
    }
}

export default QRCodeReducer;