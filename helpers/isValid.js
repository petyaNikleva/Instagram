import { getAllUsers } from "../services/authService.js";

function isValidEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

function isEmailAlreadyRegistered(email) {
    return getAllUsers().hasOwnProperty(email);
}

function isDigitInPassword(password) {
    const regex = /[0-9]/;
    return regex.test(password);
}

function isLowerCaseLeterInPassword(password) {
    const regex = /[a-z]/;
    return regex.test(password);
}

function isUpperCaseLeterInPassword(password) {
    const regex = /[A-Z]/;
    return regex.test(password);
}


export const VALIDATOR = {
    'required': (value, param) => !!(value.length === 0),
    'min-length': (value, param) => !!(value.length < Number(param)),
    'max-length': (value, param) => !!(value.length > Number(param)),
    'email-valid': (value, param) => !!(!isValidEmail(value)),
    'email-exist': (value, param) => !!(isEmailAlreadyRegistered(value)),
    'digit': (value, param) => !!(!isDigitInPassword(value)),
    'upper-case-letter': (value, param) => !!(!isUpperCaseLeterInPassword(value)),
    'lower-case-letter': (value, param) => !!(!isLowerCaseLeterInPassword(value)),
}
