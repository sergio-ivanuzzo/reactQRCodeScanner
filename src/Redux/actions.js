var goLoginPage = function(page) {
    return {
        type: 'GO_LOGIN_PAGE',
        page
    }
}

var goScanPage = function(page) {
    return {
        type: 'GO_SCAN_PAGE',
        page
    }
}

var goResultPage = function(page) {
    return {
        type: 'GO_RESULT_PAGE',
        page
    }
}