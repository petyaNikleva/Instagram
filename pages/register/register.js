import { register } from '../../services/authService.js';
import { VALIDATOR } from '../../helpers/isValid.js';

const form = document.getElementById('form');
const email = document.getElementById('email');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const password = document.getElementById('password');
const repeatPassword = document.getElementById('repeat-password');

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputValid(email);
    checkInputValid(firstName);
    checkInputValid(lastName);
    checkInputValid(password);
    checkPasswordsMatch(password, repeatPassword);

    let hasError = false;

    let inputElements = [email, firstName, lastName, password, repeatPassword];
    inputElements.forEach(element => {
        let isError = element.closest('.input-control').classList.contains('error');
        if(isError) {
            hasError = true;
        }
    });

    if (!hasError) {

        let userData = {
            firstName: firstName.value,
            lastName: lastName.value,
            password: password.value,
            email: email.value
        }

        register(email.value, userData);

        setTimeout(() => {
            alert('Successful registration.')
            location.href = "/pages/login/login.html";
        }, 500);
    }
});

email.addEventListener('blur', () => checkInputValid(email));
firstName.addEventListener('blur', () => checkInputValid(firstName));
lastName.addEventListener('blur', () => checkInputValid(lastName));
password.addEventListener('blur', () => checkInputValid(password));
repeatPassword.addEventListener('blur', () => checkPasswordsMatch(password, repeatPassword))

function checkInputValid(element) {
    const container = element.closest('.input-control');
    if(element.dataset.validators) {
        const validators = createInputValidators(element);
        const value = element.value;
        let isError = false;
        validators.forEach((validator) => {
            container.classList.remove(`error--${validator.name}`);
            console.log(VALIDATOR[validator.name])
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