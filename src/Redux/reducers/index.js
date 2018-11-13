import {ADD_ARTICLE, DO_LOGIN, SCAN_QR_CODE, PARSE_QR_CODE} from '../constants/action-types';
import {QRCodeReducer} from './parsedQRCode';
import {loginReducer} from './login';
import {combineReducers} from 'redux';

export default combineReducers({
    loginReducer: loginReducer,
    parsedQRCodeReducer: QRCodeReducer
});