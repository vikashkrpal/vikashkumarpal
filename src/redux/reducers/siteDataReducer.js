/*
* State Schema
* */
const siteDataState = {
    currentPage: "",
    currentPageData: {}
};

/*
* Schema state actions
* */
export const siteDataActions = {
    SET_CURRENT_PAGE : 'SetCurrentPage',
    SET_CURRENT_PAGE_DATA : 'SetCurrentPageData',
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
        default:
            return state;
    }
}