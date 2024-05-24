export const bindState = (state,setState) => {return {state:state,setState:setState}}
export const is_not_null = (variableText) => variableText !== null;
export const camelToFormat = (str) => {
    return str.replace(/[A-Z]/g, match => `_${match}`).toUpperCase();
}
export const checkNotUndefined = (value) => value !== undefined;
export const imageSpace = require('../asserts/woocommerce-placeholder-600x600.png');
export const loadImageFromData = (data) => checkNotUndefined(data) ? data.mediaItemUrl : imageSpace;