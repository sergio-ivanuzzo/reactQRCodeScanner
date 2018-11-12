import {Map} from 'immutable';

var reducer = function(state = Map(), action) {
    switch (action.type) {
        case 'GO_LOGIN_PAGE':
        case 'GO_SCAN_PAGE':
        case 'GO_RESULT_PAGE':
            return;
        default:
            return;
    }

    return state;
}