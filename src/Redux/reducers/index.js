import {ADD_ARTICLE, DO_LOGIN, SCAN_QR_CODE, PARSE_QR_CODE} from '../constants/action-types';
import {QRCodeReducer} from './parsedQRCode';
import {loginReducer} from './login';
import {combineReducers} from 'redux';

/*const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return {...state, articles: [...state.articles, action.payload]};
        case DO_LOGIN:
            return {...state, isLogged: true, parsedQRCode: null}
        case SCAN_QR_CODE:
            return {...state, isLogged: true, parsedQRCode: null}
        case PARSE_QR_CODE:
            return {...state, isLogged: true, parsedQRCode: action.payload}
        default:
            return state;
    }
};*/

const rootReducer = combineReducers({
    login: loginReducer,
    parsedQRCode: QRCodeReducer
})

export default rootReducer;