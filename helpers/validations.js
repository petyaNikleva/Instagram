import { getAllUsers, getUser} from "../services/authService.js";

export function checkInputValid(element) {
    const container = element.closest('.input-control');
    if (element.dataset.validators) {
        const validators = createInputValidators(element);
        const value = element.value;
        let isError = false;
        validators.forEach((validator) => {
            container.classList.remove(`error--${validator.name}`);
            if (VALIDATOR[validator.name](value, validator.param)) {
                container.classList.add(`error--${validator.name}`);
                isError = true;
            }
        })
        if (isError) {
            container.classList.remove('success');
            container.classList.add('error');
        } else {
            container.classList.add('success');
            container.classList.remove('error');
        }
    }
}

export function checkPasswordsMatch(password, repeatPassword) {
    const container = repeatPassword.closest('.input-control');
    checkInputValid(repeatPassword);
    container.classList.remove('success');
    if (repeatPassword.value !== password.value || repeatPassword.value === '') {
        container.classList.add(`error--passwords-dont-match`);
        container.classList.remove('success');
        container.classList.add('error');
    } else {
        container.classList.remove(`error--passwords-dont-match`);
        container.classList.add('success');
        container.classList.remove('error');
    }
}

export function areValidCredentials(email, password, passwordElement) {
    const container = passwordElement.closest('.input-control');
    checkInputValid(passwordElement);
    container.classList.remove('success');

    let areValid = false;
    const user = getUser(email);
    if (user?.password === password) {
        container.classList.remove(`error--passwords-dont-match`);
        container.classList.remove('error');
        areValid = true;
        setTimeout(() => {
            alert(`Welcome, ${user.firstName} ${user.lastName}!`)
            window.location.href = "/#";
        }, 500);
    } else {
        container.classList.add(`error--passwords-dont-match`);
        container.classList.remove('success');
    }
    return areValid;
}

function createInputValidators(element) {
    const validators = [];
    element.dataset.validators.split(',').map((validator) => {
        let validatorStr = validator.trim();
        const name = validatorStr.split('(')[0];
        const param = validatorStr.split(/[()]/)[1];

        validators.push({
            name,
            param
        })
    })
    return validators;
}

const VALIDATOR = {
    'required': (value, param) => !!(value.length === 0),
    'min-length': (value, param) => !!(value.length < Number(param)),
    'max-length': (value, param) => !!(value.length > Number(param)),
    'email-valid': (value, param) => isValidEmail(value),
    'email-exist': (value, param) => isEmailAlreadyRegistered(value),
    'digit': (value, param) => isDigitInPassword(value),
    'upper-case-letter': (value, param) => isUpperCaseLeterInPassword(value),
    'lower-case-letter': (value, param) => isLowerCaseLeterInPassword(value),
}

function isValidEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !regex.test(String(email).toLowerCase());
}

function isEmailAlreadyRegistered(email) {
    return getAllUsers().hasOwnProperty(email);
}

function isDigitInPassword(password) {
    const regex = /[0-9]/;
    return !regex.test(password);
}

function isLowerCaseLeterInPassword(password) {
    const regex = /[a-z]/;
    return !regex.test(password);
}

function isUpperCaseLeterInPassword(password) {
    const regex = /[A-Z]/;
    return !regex.test(password);
}

