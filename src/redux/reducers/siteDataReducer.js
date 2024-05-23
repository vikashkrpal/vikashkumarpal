/*
* State Schema
* */
const siteDataState = {
    currentPage: "",
    currentPageData: {},
    dataLoading: true,
    errorResponse:null
};

/*
* Schema state actions
* */
export const siteDataActions = {
    SET_CURRENT_PAGE : 'SetCurrentPage',
    SET_CURRENT_PAGE_DATA : 'SetCurrentPageData',
    SET_DATA_LOADING : 'SetDataLoading',
    SET_ERROR_RESPONSE : 'SetErrorResponse',
    SET_RESET_STATE : 'SetResetState',
}

/*
* Reducer of schema & actions
* @author #structlooper
* */
export function siteDataReducer(state = siteDataState, action) {
    switch (action.type) {
        case siteDataActions.SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload};
        case siteDataActions.SET_CURRENT_PAGE_DATA:
            return {...state, currentPageData: action.payload};
        case siteDataActions.SET_DATA_LOADING:
            return {...state, dataLoading: action.payload};
        case siteDataActions.SET_ERROR_RESPONSE:
            return {...state, errorResponse: action.payload};
        case siteDataActions.SET_RESET_STATE:
            return {...siteDataState, currentPage: action.payload};
        default:
            return state;
    }
}
