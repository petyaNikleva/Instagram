import {isValidEmail, 
    isDigitInPassword, 
    isLowerCaseLeterInPassword, 
    isUpperCaseLeterInPassword, 
    isEmailAlreadyRegistered} from '../../helpers/isValid.js';
import { register } from '../../services/authService.js';

const form = document.getElementById('form');
const email = document.getElementById('email');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');``
const password = document.getElementById('password');
const repeatPassword = document.getElementById('repeat-password');

let errorOccured;

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
}); 

function validateInputs() {

    errorOccured = false;

    const emailValue = email.value;
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const passwordValue = password.value;
    const repeatPasswordValue = repeatPassword.value;

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address'); 
    } else if(isEmailAlreadyRegistered(emailValue)) {
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
    } else if(!isLowerCaseLeterInPassword(passwordValue)) {
        setError(password, 'Password shoud contain at least one lower case letter')
    } else if(!isUpperCaseLeterInPassword(passwordValue)) {
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
        
        let userData  = {
            firstName: firstNameValue,
            lastName: lastNameValue,
            password: passwordValue,
            email: emailValue
        }
    
    register(emailValue, userData);    
    
       setTimeout(() => {
           alert('Successful registration.')
            location.href="/pages/login/login.html";
        }, 500);
    }
}

function setError(element, message) {
    errorOccured = true; 
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

