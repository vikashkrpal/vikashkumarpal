export const bindState = (state,setState) => {return {state:state,setState:setState}}
export const is_not_null = (variableText) => variableText !== null;
export const camelToFormat = (str) => {
    return str.replace(/[A-Z]/g, match => `_${match}`).toUpperCase();
}
export const checkNotUndefined = (value) => value !== undefined;
export const imageSpace = require('../asserts/woocommerce-placeholder-600x600.png');
export const loadImageFromData = (data) => checkNotUndefined(data) ? data.mediaItemUrl : imageSpace;
export function replaceAdminUrl(schemaJson) {
    const pattern = /"https:\/\/admin\.vikashkumarpal\.com(?!\/wp-content\/uploads\/\d{4}\/\d{2})/g;
    const replacement = '"https://vikashkumarpal.com';

    // Use regex to replace the URL
    return schemaJson.replace(pattern, replacement);
}