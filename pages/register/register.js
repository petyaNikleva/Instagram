const form = document.getElementById('form');
const email = document.getElementById('email');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
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
        
        localStorage.clear();
        localStorage.setItem('email', emailValue)
        localStorage.setItem('firstName', firstNameValue)
        localStorage.setItem('lastName',lastNameValue)
        localStorage.setItem('password', passwordValue)
    
        alert('Successful registration.')
    }
}

function setError(element, message) {
    errorOccured = true; 
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

function isValidEmail(email) {
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

function isDigitInPassword(password) {
    let regex = /[0-9]/;
    return regex.test(password);
}

function isLowerCaseLeterInPassword(password) {
    let regex = /[a-z]/;
    return regex.test(password)
}

function isUpperCaseLeterInPassword(password) {
    let regex = /[A-Z]/;
    return regex.test(password)
}