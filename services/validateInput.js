export function isValidEmail(email) {
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

export function isDigitInPassword(password) {
    let regex = /[0-9]/;
    return regex.test(password);
}

export function isLowerCaseLeterInPassword(password) {
    let regex = /[a-z]/;
    return regex.test(password)
}

export function isUpperCaseLeterInPassword(password) {
    let regex = /[A-Z]/;
    return regex.test(password)
}

