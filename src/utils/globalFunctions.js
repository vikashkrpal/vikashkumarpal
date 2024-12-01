import moment from 'moment';

export const bindState = (state,setState) => {return {state:state,setState:setState}}
export const isNotNull = (variableText) => variableText !== null;
export const camelToFormat = (str) => {
    return str.replace(/[A-Z]/g, match => `_${match}`).toUpperCase();
}
export const checkNotUndefined = (value) => value !== undefined;

export const checkNullOrUndefined = variable => (variable === "" || variable === undefined);

export  const checkValidEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export const imageSpace = require('../asserts/woocommerce-placeholder-600x600.png');
export const loadImageFromData = (data) => (checkNotUndefined(data) && isNotNull(data)) ? (data?.mediaItemUrl || data): imageSpace;
export function replaceAdminUrl(schemaJson) {
    const pattern = /"https:\/\/admin\.vikashkumarpal\.com(?!\/wp-content\/uploads\/\d{4}\/\d{2})/g;
    const replacement = '"https://vikashkumarpal.com';

    // Use regex to replace the URL
    return schemaJson.replace(pattern, replacement);
}
export const formatDate = (dateString, time=false) => {
   return moment(dateString).format('D MMM, YYYY'+ (time ? ' h:ma': ''));
};

export const calculateReadTime = (text) => {
    const wordsPerMinute = 200; // Average reading speed
    const textLength = text.split(/\s+/).length; // Split by words
    const readTime = Math.ceil(textLength / wordsPerMinute);
    return readTime;
};

export function containsHTML(input) {
    const htmlRegex = /<\/?[a-z][\s\S]*>/i;
    return htmlRegex.test(input);
}
