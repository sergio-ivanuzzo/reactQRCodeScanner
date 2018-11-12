import {DO_LOGIN} from "../constants/action-types";

const initialState = {
    isLogged: false
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case DO_LOGIN:
            return {...state, isLogged: true}
        default:
            return state;
    }
}

export default loginReducer;