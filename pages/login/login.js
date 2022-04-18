import { checkIsRegistered, logIn, getUser } from "../../services/authService.js";

const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

let errorOccured;

form.addEventListener('submit', e => {
    e.preventDefault();

    validateLoginCredentials();
});

function validateLoginCredentials() {

    errorOccured = false;
    let currentUserData;

    const emailValue = email.value;
    const passwordValue = password.value;

    const isRegisteredEmail = checkIsRegistered(emailValue);

    if (isRegisteredEmail) {
        currentUserData = getUser(emailValue);
        if (passwordValue !== currentUserData.password) {
            setError(password, 'Incorrect email or password');  
        } else {
            setSuccess(email);
            setSuccess(password);
        }
    } else {
        setError(email, 'Incorrect email or password');
    }

    if (!errorOccured) {
        const firstName = currentUserData.firstName;
        const lastName = currentUserData.lastName;
        
        logIn(emailValue);

        setTimeout( () => {
            alert(`Welcome, ${firstName} ${lastName}!`)
            location.href='/index.html';
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

