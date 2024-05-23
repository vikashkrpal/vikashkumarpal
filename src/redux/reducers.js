import { combineReducers } from 'redux';
import {siteDataReducer} from "./reducers/siteDataReducer";
import {camelToFormat} from "../utils/globalFunctions";


/*
* Add reducers here to combine with root reducer
* */
const red = {
    siteData: siteDataReducer,
}
const rootReducer = combineReducers(red);
const reducers =  Object.keys(red).reduce((acc, key) => {
    acc[camelToFormat(key)] = key;
    return acc;
}, {});


export {rootReducer, reducers};