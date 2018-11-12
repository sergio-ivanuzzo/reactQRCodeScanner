import {DO_LOGIN} from '../constants/action-types';

const initialState = {
    token: null
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case DO_LOGIN:
            return {...state, token: action.payload}
        default:
            return state;
    }
}