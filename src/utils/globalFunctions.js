export const bindState = (state,setState) => {return {state:state,setState:setState}}
export const is_not_null = (variableText) => variableText !== null;
export const camelToFormat = (str) => {
    return str.replace(/[A-Z]/g, match => `_${match}`).toUpperCase();
}