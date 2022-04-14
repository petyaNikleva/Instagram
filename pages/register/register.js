import { register } from '../../services/authService.js';
import { VALIDATOR } from '../../helpers/isValid.js';

const form = document.getElementById('form');
const email = document.getElementById('email');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const password = document.getElementById('password');
const repeatPassword = document.getElementById('repeat-password');

let errorOccured = false;;

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

email.addEventListener('blur', () => checkInputValid(email));
firstName.addEventListener('blur', () => checkInputValid(firstName));
lastName.addEventListener('blur', () => checkInputValid(lastName));
password.addEventListener('blur', () => checkInputValid(password));
repeatPassword.addEventListener('blur', () => checkPasswordsMatch(password, repeatPassword))

function validateInputs() {

    const emailValue = email.value;
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const passwordValue = password.value;
    const repeatPasswordValue = repeatPassword.value;

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else if (isEmailAlreadyRegistered(emailValue)) {
        setError(email, 'This email has already been registered.');
    } else {
        setSuccess(email);
    }

    if (firstNameValue === '') {
        setError(firstName, 'First name is required');
    } else {
        setSuccess(firstName);
    }

    if (lastNameValue === '') {
        setError(lastName, 'Last name is required');
    } else {
        setSuccess(lastName);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 character.');
    } else if (!isDigitInPassword(passwordValue)) {
        setError(password, 'Password shoud contain at least one digit.')
    } else if (!isLowerCaseLeterInPassword(passwordValue)) {
        setError(password, 'Password shoud contain at least one lower case letter')
    } else if (!isUpperCaseLeterInPassword(passwordValue)) {
        setError(password, 'Password shoud contain at least one upper case letter')
    }
    else {
        setSuccess(password);
    }

    if (repeatPasswordValue === '') {
        setError(repeatPassword, 'Please confirm your password');
    } else if (repeatPasswordValue !== passwordValue) {
        setError(repeatPassword, "Passwords doesn't match");
    } else {
        setSuccess(repeatPassword);
    }

    if (!errorOccured) {

        let userData = {
            firstName: firstNameValue,
            lastName: lastNameValue,
            password: passwordValue,
            email: emailValue
        }

        register(emailValue, userData);

        setTimeout(() => {
            alert('Successful registration.')
            location.href = "/pages/login/login.html";
        }, 500);
    }
}

function checkInputValid(element) {
    const container = element.closest('.input-control');
    if(element.dataset.validators) {
        const validators = createInputValidators(element);
        const value = element.value;
        let isError = false;
        validators.forEach((validator) => {
            container.classList.remove(`error--${validator.name}`);
            if(VALIDATOR[validator.name](value, validator.param)) {
                container.classList.add(`error--${validator.name}`);
                isError = true;
            } 
        })  
        if(isError) {
            container.classList.remove('success');
            container.classList.add('error');
        } else {
            container.classList.add('success');
            container.classList.remove('error');
        }
    }

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
    return validators
}

function checkPasswordsMatch(password, repeatPassword) {
    const container = repeatPassword.closest('.input-control');
    checkInputValid(repeatPassword);
    container.classList.remove('success');
    if (repeatPassword.value !== password.value) {
        container.classList.add(`error--passwords-dont-match`);
        container.classList.remove('success');
        container.classList.add('error');
    } else {
        container.classList.remove(`error--passwords-dont-match`);
        container.classList.add('success');
        container.classList.remove('error');
    }
}