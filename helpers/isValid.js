export function isValidEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

export function isEmailAlreadyRegistered(email) {
    const isRegistered = localStorage.getItem(email);
    return isRegistered;
}

export function isDigitInPassword(password) {
    const regex = /[0-9]/;
    return regex.test(password);
}

export function isLowerCaseLeterInPassword(password) {
    const regex = /[a-z]/;
    return regex.test(password);
}

export function isUpperCaseLeterInPassword(password) {
    const regex = /[A-Z]/;
    return regex.test(password);
}

