import { register } from '../../services/authService.js';
import { checkInputValid, checkPasswordsMatch } from '../../helpers/validations.js';


const form = document.getElementById('form');
const email = document.getElementById('email');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const dateOfBirth = document.getElementById('dateOfBirth');
const password = document.getElementById('password');
const repeatPassword = document.getElementById('repeat-password');

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputValid(email);
    checkInputValid(firstName);
    checkInputValid(lastName);
    checkInputValid(dateOfBirth);
    checkInputValid(password);
    checkPasswordsMatch(password, repeatPassword);

    let hasError = false;

    let inputElements = [email, firstName, lastName, dateOfBirth, password, repeatPassword];
    inputElements.forEach(element => {
        let isError = element.closest('.input-control').classList.contains('error');
        if (isError) {
            hasError = true;
        }
    });

    if (!hasError) {

        let userData = {
            firstName: firstName.value,
            lastName: lastName.value,
            dateOfBirth: dateOfBirth.value,
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

// email.addEventListener('blur', () => checkInputValid(email));
// firstName.addEventListener('blur', () => checkInputValid(firstName));
// lastName.addEventListener('blur', () => checkInputValid(lastName));
// dateOfBirth.addEventListener('blur', () => checkInputValid(dateOfBirth));
// password.addEventListener('blur', () => checkInputValid(password));
// repeatPassword.addEventListener('blur', () => checkPasswordsMatch(password, repeatPassword))



